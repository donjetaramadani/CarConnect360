import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Comment model
const Comment = sequelize.define('Comment', {
  createdBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  published: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

// Synchronize the model with the database
Comment.sync();

// Export the Comment model
export default Comment;
