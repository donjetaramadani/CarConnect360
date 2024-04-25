import { DataTypes } from 'sequelize';
import sequelize from './database';
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import UserModel from "./models/users";
import ActiveSession from "./models/activeSession";
import { secret, smtpConf } from "./config";
import reqAuth from "./middleware/reqAuth";
import nodemailer from "nodemailer";

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userRole: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  city: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  country: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
});

// Synchronize the model with the database
User.sync();

// Export the User class
export default class UserService {
  constructor() {
    this.connect();
  }

  // Connect sequelize to MySQL
  async connect() {
    try {
      await sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  // create a new user
  async create(
    name,
    email,
    password,
    userRole,
    gender,
    phoneNumber,
    city,
    country
  ) {
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      return { success: false, msg: "wrong email format" };
    }
    if (password.length < 8) {
      return { success: false, msg: "password is too short" };
    }
    if (
      phoneNumber &&
      !phoneNumber.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/im)
    ) {
      return { success: false, msg: "wrong phone number format" };
    }

    const userExists = await UserModel.findOne({ where: { email: email } });
    if (userExists) {
      return { success: false, msg: "Email already exists" };
    }

    const hash = await bcrypt.hash(password, 10);
    
    try {
      const newUser = await UserModel.create({
        name: name,
        email: email,
        password: hash,
        gender: gender,
        phoneNumber: phoneNumber,
        city: city,
        country: country,
        userRole: userRole,
      });
      const userId = newUser._id.toString();
      return {
        success: true,
        msg: "The user was successfully registered",
        userId: userId,
      };
    } catch (error) {
      console.error("Error at database:", error);
      return { success: false, msg: "Error at database", error: error };
    }
  }

  // login
  async login(email, password) {
    const user = await UserModel.findOne({ where: { email: email } });
    if (!user) {
      return { success: false, msg: "Wrong credentials" };
    }
    const promise = new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, async function (err, res) {
        if (err) {
          reject({ success: false, msg: "Error at compare", error: err });
        } else {
          if (res) {
            const token = Jwt.sign(user.toJSON(), secret, {
              expiresIn: 86400, // 1 week
            });
            await ActiveSession.deleteMany({ userId: user._id });
            await ActiveSession.create({ token: token, userId: user._id });
            user.password = null;
            resolve({ success: true, user: user, token: token });
          } else {
            resolve({ success: false, msg: "incorrect user or password" });
          }
        }
      });
    });
    return promise;
  }

  // get a user by his token
  async getUserByToken(token) {
    const activeSession = await reqAuth(token);
    if (!activeSession.success) {
      return { success: false, msg: activeSession.msg };
    }

    const user = await UserModel.findById(activeSession.userId);

    if (!user) {
      return { success: false, msg: "user not logged in or not found" };
    }
    return { success: true, user: user };
  }

  // logout
  async logout(token) {
    try {
      await ActiveSession.deleteMany({ token: token });
      return { success: true };
    } catch (err) {
      return { success: false, msg: "error at logout", error: err };
    }
  }

  // update User
  async updateUser(token, updatedUser) {
    const sessionStatus = await this.getUserByToken(token);
    if (!sessionStatus.success) {
      return { success: false, msg: sessionStatus.msg };
    }
    const user = sessionStatus.user;
    if (!user) {
      return { success: false, msg: "user not found" };
    }

    const dataToSet = {};
    if (updatedUser.name != null) {
      dataToSet.name = updatedUser.name;
    }

    if (updatedUser.email != null) {
      if (!updatedUser.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        return { success: false, msg: "fields validations error" };
      }
      dataToSet.email = updatedUser.email;
    }

    if (updatedUser.gender != null) {
      dataToSet.gender = updatedUser.gender;
    }

    if (updatedUser.phoneNumber != null) {
      if (
        !updatedUser.phoneNumber.match(
          /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/im
        )
      ) {
        return { success: false, msg: "fields validations error" };
      }
      dataToSet.phoneNumber = updatedUser.phoneNumber; // Fix: Use updatedUser.phoneNumber
    }

    if (updatedUser.city != null) {
      dataToSet.city = updatedUser.city;
    }

    if (updatedUser.country != null) {
      dataToSet.country = updatedUser.country;
    }

    const newValues = { $set: dataToSet };
    try {
      await UserModel.updateOne({ _id: user._id }, newValues);
      return { success: true, msg: "update completed" };
    } catch (err) {
      return { success: false, msg: "error at update", error: err };
    }
  }

  async sendForgotPasswordEmail(email) {
    const errors = [];
    if (!email) {
      errors.push({ msg: "Please enter all fields" });
    }
    const user = await UserModel.findOne({ where: { email: email } });
    if (!user) {
      errors.push({ msg: "Email Address does not exist" }); // Fix: Corrected typo
    }
    if (errors.length > 0) {
      return { success: false, errors: errors };
    }
    const transporter = nodemailer.createTransport(smtpConf);
    const query = { _id: user._id };
    const newValues = { $set: { resetPass: true } };
    await UserModel.updateOne(query, newValues);
    const response =  await transporter.sendMail({
      from: '"Your Company" <' + smtpConf.auth.user + ">", // sender address
      to: email, // list of receivers
      subject: "Reset Password", // Subject line
      html:
        '<h1>Hey,</h1><br><p>If you want to reset your password, please click on the following link:</p><p><a href="' +
        "http://localhost:3000/auth/confirm-password/" +
        user._id +
        '">"' +
        "http://localhost:3000/auth/confirm-email/" +
        user._id +
        +'"</a><br><br>If you did not ask for it, please let us know immediately at <a href="mailto:' +
        smtpConf.auth.user +
        '">' +
        smtpConf.auth.user +
        "</a></p>", // html body
    });
    if(!response){
      return {success : false}; // Fix: Corrected typo
    }
    return { success: true };
  }

  async resetPassword(userId, password) {
    const errors = [];
    if (password.length < 6) {
      errors.push({ msg: "Password must be at least 6 characters" });
    }
    if (errors.length > 0) {
      return { success: false, msg: errors };
    }
    try {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          throw err;
        } else {
          bcrypt.hash(password, salt, async function (err, hash) {
            if (err) {
              throw err;
            } else {
              password = hash;
              const newValues = {
                $set: { resetPass: false, password: password },
              };
              await UserModel.updateOne({ _id: userId }, newValues);
              return {
                success: true,
                msg: "The user successfully changed his password",
                userId: userId,
              };
            }
          });
        }
      });
    } catch (err) {
      console.log("error at reset password", err);
    }
  }
}

// Unit tests for UserService
describe('UserService', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  it('should create a new user with the specified userRole', async () => {
    const result = await userService.create(
      'Donjeta Ramadani', // Corrected name
      'donjeta@gmail.com',
      'donjeta123',
      'admin', // Specify the userRole
      'female',
      '+1234567890',
      'Prishtine',
      'Kosovo'
    );

    expect(result.success).toBe(true);
    expect(result.userId).toBeDefined();
  });

  it('should return an error if the email format is incorrect', async () => {
    const result = await userService.create(
      'Jane Doe',
      'invalid-email', // Invalid email format
      'password123',
      'regular',
      'female',
      '987654321',
      'Los Angeles',
      'USA'
    );

    expect(result.success).toBe(false);
    expect(result.msg).toBe('wrong email format');
  });

}); // End of describe block for unit tests
