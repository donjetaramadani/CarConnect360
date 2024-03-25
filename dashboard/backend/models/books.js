import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Book model
const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photoLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  numberOfPages: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  aparitionYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Book.sync();

// Export the Book model
export default Book;
