import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Language model
const Language = sequelize.define('Language', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isoCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Language.sync();

// Export the Language model
export default Language;
