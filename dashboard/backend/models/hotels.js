import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Hotel model
const Hotel = sequelize.define('Hotel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  websiteLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  photoLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Hotel.sync();

// Export the Hotel model
export default Hotel;
