import { DataTypes, Model } from 'sequelize';
import { sequelize } from './database.js';

class Order extends Model {}

Order.init(
  {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productIds: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Order',
  }
);

(async () => {
  try {
    await sequelize.sync();
    console.log('Order model synchronized with database.');
  } catch (error) {
    console.error('Error synchronizing Order model:', error);
  }
})();

export default Order;
