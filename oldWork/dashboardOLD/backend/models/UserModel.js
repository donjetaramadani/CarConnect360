// models/UserModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import the Sequelize instance

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

module.exports = User;
