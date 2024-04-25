import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Country model
const Country = sequelize.define('Country', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Country.sync();

// Export the Country model
export default Country;
