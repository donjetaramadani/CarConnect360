import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Event model
const Event = sequelize.define('Event', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  organiser: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Event.sync();

// Export the Event model
export default Event;
