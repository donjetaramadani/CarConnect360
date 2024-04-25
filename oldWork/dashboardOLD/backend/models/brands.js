import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Brand model
const Brand = sequelize.define('Brand', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  photoLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  websiteLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Synchronize the model with the database
Brand.sync();

// Export the Brand model
export default Brand;
