import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Role model
const Role = sequelize.define('Role', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Role.sync();

// Export the Role model
export default Role;
