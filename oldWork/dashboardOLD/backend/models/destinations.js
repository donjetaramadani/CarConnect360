import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Destination model
const Destination = sequelize.define('Destination', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  googleMapsLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photoLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Destination.sync();

// Export the Destination model
export default Destination;
