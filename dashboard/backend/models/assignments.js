import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Assignment model
const Assignment = sequelize.define('Assignment', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assignedTo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Assignment.sync();

// Export the Assignment model
export default Assignment;
