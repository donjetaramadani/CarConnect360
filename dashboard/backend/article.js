import { DataTypes } from 'sequelize';
import { sequelize } from './models/database.js'; 
import reqAuth from "./middleware/reqAuth";
import { numberOfPastMonths } from "./utils/constants";

// Define the Article model
const ArticleModel = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
ArticleModel.sync();

// Export the Article class
export default class Article {
  constructor() {
    this.connect();
  }

  // connect sequelize to mysql
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

    const elements = await ArticleModel.findAll();
    const labels = [];
    for (let i = 1; i <= numberOfPastMonths; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const currentLabel = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
      labels.push(currentLabel);
    }
    const data = [];
    for (const label of labels) {
      let numberOfItems = 0;
      for (const elem of elements) {
        if (elem.publishDate && elem.publishDate.toLocaleString("en-US", { month: "short" }).toUpperCase() === label) {
          numberOfItems++;
        }
      }
      data.push(numberOfItems);
    }
    return {
      success: true,
      labels: labels,
      data: data,
      numberOfItems: elements.length
    };
  }

  async getAll(token) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    const elements = await ArticleModel.findAll();
    return { success: true, elements: elements };
  }

  async getById(token, id) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    const element = await ArticleModel.findByPk(id);
    if (!element) {
      return { success: false, msg: "Element not found by given id" };
    }
    return { success: true, element: element };
  }

  async create(token, title, content, publishDate, createdBy, tags, status) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    if (!title || !content || !publishDate || !createdBy || !status) {
      return { success: false, msg: "Required fields are empty" };
    }
    try {
      const newObj = await ArticleModel.create({
        title: title,
        content: content,
        publishDate: publishDate,
        createdBy: createdBy,
        tags: tags,
        status: status
      });
      return { success: true, elemId: newObj.id };
    } catch (error) {
      console.error("Error creating article:", error);
      return { success: false, msg: "Error creating article" };
    }
  }

  async update(token, id, title, content, publishDate, createdBy, tags, status) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    if (!id) {
      return { success: false, msg: "Required fields are empty" };
    }
    try {
      const article = await ArticleModel.findByPk(id);
      if (!article) {
        return { success: false, msg: "Article not found" };
      }
      await article.update({
        title: title,
        content: content,
        publishDate: publishDate,
        createdBy: createdBy,
        tags: tags,
        status: status
      });
      return { success: true };
    } catch (error) {
      console.error("Error updating article:", error);
      return { success: false, msg: "Error updating article" };
    }
  }

  async delete(token, id) {
    const authObject = await reqAuth(token);
    if (!authObject.success) {
      return { success: false, msg: authObject.msg };
    }
    if (!id) {
      return { success: false, msg: "Required fields are empty" };
    }
    try {
      const article = await ArticleModel.findByPk(id);
      if (!article) {
        return { success: false, msg: "Article not found" };
      }
      await article.destroy();
      return { success: true };
    } catch (error) {
      console.error("Error deleting article:", error);
      return { success: false, msg: "Error deleting article" };
    }
  }
}
