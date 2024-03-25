import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Room model
const Room = sequelize.define('Room', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numberOfRooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hotelId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Synchronize the model with the database
Room.sync();

// Export the Room model
export default Room;
