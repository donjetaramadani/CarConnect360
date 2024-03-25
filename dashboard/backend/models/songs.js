import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Song model
const Song = sequelize.define('Song', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  artistName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aparitionYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  album: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Song.sync();

// Export the Song model
export default Song;
