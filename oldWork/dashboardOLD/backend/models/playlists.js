import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Playlist model
const Playlist = sequelize.define('Playlist', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  songIds: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
});

// Synchronize the model with the database
Playlist.sync();

// Export the Playlist model
export default Playlist;
