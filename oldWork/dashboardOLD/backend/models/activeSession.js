import { DataTypes } from 'sequelize';
import { sequelize } from './database.js';

const ActiveSession = sequelize.define('ActiveSession', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

export default ActiveSession;
