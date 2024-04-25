/**
* This is an auto generated code. This code should not be modified since the file can be overwriten 
* if new genezio commands are executed.
*/
   
  import { Remote } from "./remote.js"

  //const backendUrl = process.env.BACKEND_URL;
  const backendUrl = "http://localhost:5100";

  export class User {
      static remote = new Remote(backendUrl + "/User")
  
      static async create(name, email, password, userType, gender, phoneNumber, city, country) {
        try{  
        return await User.remote.call("User.create", name, email, password, userType, gender, phoneNumber, city, country)  
      }catch (error){
        console.error("An error ocurred during user creation:", error);
        throw error;
      }
    }
  
    static async login(email, password) {
        try {
            // Call the remote function to perform user login
            return await User.remote.call("User.login", email, password);
        } catch (error) {
            // Handle any errors that occur during the login operation
            console.error("An error occurred during login:", error);
            throw error; // Rethrow the error to propagate it to the caller
        }
    }
  
    static async getUserByToken(token) {
        try {
            // Call the remote function to fetch user details by token
            return await User.remote.call("User.getUserByToken", token);
        } catch (error) {
            // Handle any errors that occur while fetching user details
            console.error("An error occurred while fetching user details by token:", error);
            throw error; // Rethrow the error to propagate it to the caller
        }
    }
  
    static async logout(token) {
        try {
            // Call the remote function to perform user logout
            return await User.remote.call("User.logout", token);
        } catch (error) {
            // Handle any errors that occur during the logout operation
            console.error("An error occurred during logout:", error);
            throw error; // Rethrow the error to propagate it to the caller
        }
    }
  
    static async updateUser(token, updatedUser) {
        try {
            // Call the remote function to update user information
            return await User.remote.call("User.updateUser", token, updatedUser);
        } catch (error) {
            // Handle any errors that occur during the update operation
            console.error("An error occurred during user update:", error);
            throw error; // Rethrow the error to propagate it to the caller
        }
    }
  
    static async sendForgotPasswordEmail(email) {
        try {
            // Call the remote function to send a forgot password email
            return await User.remote.call("User.sendForgotPasswordEmail", email);
        } catch (error) {
            // Handle any errors that occur while sending the forgot password email
            console.error("An error occurred while sending forgot password email:", error);
            throw error; // Rethrow the error to propagate it to the caller
        }
    }

  
    static async resetPassword(userId, password) {
        try {
            // Call the remote function to reset user password
            return await User.remote.call("User.resetPassword", userId, password);
        } catch (error) {
            // Handle any errors that occur during the password reset operation
            console.error("An error occurred during password reset:", error);
            throw error; // Rethrow the error to propagate it to the caller
        }
    }  
  }
  
  export { Remote };
  