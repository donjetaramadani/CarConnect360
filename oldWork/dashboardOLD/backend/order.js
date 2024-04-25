import { DataTypes } from 'sequelize';
import sequelize from './models/database';
import reqAuth from "./middleware/reqAuth";
import { numberOfPastMonths } from "./utils/constants";

// Define the Order model
const Order = sequelize.define('Order', {
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productIds: {
    type: DataTypes.STRING, // Adjust the data type as per your requirement
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT, // Adjust the data type as per your requirement
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
});


// Export the Order class
export default class OrderService {
  constructor() {
    this.connect();
  }


    // Connect sequelize to MySQL
    connect() {
      try {
        sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }

  async getChartData(token) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }

    const elements = await OrderModel.find({});
    var labels = [];
    for (var i = numberOfPastMonths; i >= 1; i--) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const currentLabel = date
        .toLocaleString("en-US", { month: "short" })
        .toUpperCase();
      labels.push(currentLabel);
    }
    var data = [];
    for (const label of labels) {
      var numberOfItems = 0;
      for (const elem of elements) {
        if (!elem.date) {
          continue;
        }

        if (
          elem.date.toLocaleString("en-US", { month: "short" })
          .toUpperCase() === label
        ) {
          numberOfItems = numberOfItems + 1;
        }
      }
      data.push(numberOfItems);
    }
    return { success: true, labels: labels, data: data, numberOfItems: elements.length};
  }

  async getAll(token) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }

    const elements = await OrderModel.find({});
    return { success: true, elements: elements };
  }

  async getById(token, id) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    const element = await OrderModel.findById(id);
    if (!element) {
      return { success: false, msg: "Element not found by given id" };
    }
    return { success: true, elements: element };
  }

  async create(token, clientId, productIds, price, status, date) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    if (
      clientId == null ||
      productIds == null ||
      price == null ||
      status == null ||
      date == null
    ) {
      return { success: false, msg: "required fields are empty" };
    }
    const newObj = await OrderModel.create({
      clientId: clientId,
      productIds: productIds,
      price: price,
      status: status,
      date: date,
    });
    return { success: true, elemId: newObj._id };
  }

  async update(token, clientId, productIds, price, status, date) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    if (!id) {
      return { success: false, msg: "Required fields are empty" };
    }
    const dataToSet = {};

    if (clientId != null) {
      dataToSet.clientId = clientId;
    }

    if (productIds != null) {
      dataToSet.productIds = productIds;
    }

    if (price != null) {
      dataToSet.price = price;
    }

    if (status != null) {
      dataToSet.status = status;
    }

    if (date != null) {
      dataToSet.date = date;
    }

    const newValues = { $set: dataToSet };
    const item = await OrderModel.updateOne({ _id: id }, newValues);
    if (!item) {
      return { success: false, msg: "Element does not exists" };
    }

    return { success: true };
  }

  async delete(token, id) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    if (!id) {
      return { success: false, msg: "Required fields are empty" };
    }
    await OrderModel.deleteMany({ _id: id });
    return { success: true };
  }
}
