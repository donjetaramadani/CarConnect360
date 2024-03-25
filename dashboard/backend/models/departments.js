import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Department model
const Department = sequelize.define('Department', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Synchronize the model with the database
Department.sync();

// Export the Department model
export default Department;
