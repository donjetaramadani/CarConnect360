import { DataTypes } from 'sequelize';
import { sequelize } from './database.js';

// Define the Task model
const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  assignedTo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  madeBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Task.sync();

// Export the Task model
export default Task;
