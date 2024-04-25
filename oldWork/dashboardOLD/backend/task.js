import { DataTypes } from 'sequelize';
import sequelize from './database';
import reqAuth from "./middleware/reqAuth";

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
    defaultValue: DataTypes.NOW,
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

// Export the Task class
export default class TaskService {
  constructor() {
    this.connect();
  }

  // Connect sequelize to MySQL
  async connect() {
    try {
      await sequelize.authenticate();
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

    const elements = await TaskModel.find({});
    var labels = listDate;
    var data = [];
    for (const label of labels) {
      var numberOfItems = 0;
      for (const elem of elements) {
        if (!elem.dueDate) {
          continue;
        }
        if (
          elem.dueDate.toLocaleString("en-US", { month: "short" })
          .toUpperCase() === label
        ) {
          numberOfItems = numberOfItems + 1;
        }
      }
      data.push(numberOfItems);
    }
    return { success: true, labels: labels, data: data };
  }

  async getAll(token) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }

    const elements = await TaskModel.find({});
    return { success: true, elements: elements };
  }

  async getById(token, id) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    const element = await TaskModel.findById(id);
    if (!element) {
      return { success: false, msg: "Element not found by given id" };
    }
    return { success: true, elements: element };
  }

  async create(token, title, description, dueDate, assignedTo, madeBy, status) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    if (
      title == null ||
      description == null ||
      dueDate == null ||
      assignedTo == null ||
      madeBy == null ||
      status == null
    ) {
      return { success: false, msg: "required fields are empty" };
    }
    const newObj = await TaskModel.create({
      title: title,
      description: description,
      dueDate: dueDate,
      assignedTo: assignedTo,
      madeBy: madeBy,
      status: status,
    });
    return { success: true, elemId: newObj._id };
  }

  async update(
    token,
    id,
    title,
    description,
    dueDate,
    assignedTo,
    madeBy,
    status
  ) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    if (!id) {
      return { success: false, msg: "Required fields are empty" };
    }
    const dataToSet = {};

    if (title != null) {
      dataToSet.title = title;
    }

    if (description != null) {
      dataToSet.description = description;
    }

    if (dueDate != null) {
      dataToSet.dueDate = dueDate;
    }

    if (assignedTo != null) {
      dataToSet.assignedTo = assignedTo;
    }

    if (madeBy != null) {
      dataToSet.madeBy = madeBy;
    }

    if (status != null) {
      dataToSet.status = status;
    }

    const newValues = { $set: dataToSet };
    const item = await TaskModel.updateOne({ _id: id }, newValues);
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
    await TaskModel.deleteMany({ _id: id });
    return { success: true };
  }
}
