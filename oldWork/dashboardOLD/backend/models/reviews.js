import { DataTypes } from 'sequelize';
import { sequelize } from "../database";

// Define the Review model
const Review = sequelize.define('Review', {
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Review.sync();

// Export the Review model
export default Review;
