import express from "express";
import dotenv from "dotenv";
import { Sequelize } from 'sequelize';
import ArticleModel from "./models/articles.js";
import OrderModel from "./models/orders.js";
import TaskModel from "./models/tasks.js";
import UserModel from "./models/users.js";
import ActiveSessionModel from "./models/activeSession.js";
import ProductModel from "./models/products.js"; // Adjusted import
import Task from "./models/tasks.js"; // Adjusted import
import User from "./models/users.js"; // Adjusted import

import Article from "./models/articles.js";
import Order from "./models/orders.js";
import Product from "./models/products.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

// MySQL connection settings
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

// Test MySQL connection
sequelize.authenticate()
  .then(() => {
    console.log('MySQL connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Define models
const articleModel = new ArticleModel(sequelize); // Renamed to articleModel to avoid naming conflict
const orderModel = new OrderModel(sequelize); // Renamed to orderModel to avoid naming conflict
const productModel = new ProductModel(sequelize); // Renamed to productModel to avoid naming conflict
const taskModel = new TaskModel(sequelize); // Renamed to taskModel to avoid naming conflict
const userModel = new UserModel(sequelize); // Renamed to userModel to avoid naming conflict
const activeSessionModel = new ActiveSessionModel(sequelize); // Renamed to activeSessionModel to avoid naming conflict

// Define associations
// Assuming you have associations between different models

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Articles API
const article = new Article(articleModel); // Passed articleModel to Article constructor
app.get("/articles", async (req, res) => {
  const token = req.headers.authorization;
  const result = await article.getAll(token);
  res.json(result);
});

// Orders API
const order = new Order(orderModel); // Passed orderModel to Order constructor
app.get("/orders", async (req, res) => {
  const token = req.headers.authorization;
  const result = await order.getAll(token);
  res.json(result);
});

// Products API
const product = new Product(productModel); // Passed productModel to Product constructor
app.get("/products", async (req, res) => {
  const token = req.headers.authorization;
  const result = await product.getAll(token);
  res.json(result);
});

// Tasks API
const task = new Task(taskModel); // Passed taskModel to Task constructor
app.get("/tasks", async (req, res) => {
  const token = req.headers.authorization;
  const result = await task.getAll(token);
  res.json(result);
});

// Users API
const user = new User(userModel, activeSessionModel); // Passed userModel and activeSessionModel to User constructor
app.post("/register", async (req, res) => {
  const { name, email, password, userType, gender, phoneNumber, city, country } = req.body;
  const result = await user.create(name, email, password, userType, gender, phoneNumber, city, country);
  res.json(result);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await user.login(email, password);
  res.json(result);
});

app.get("/logout", async (req, res) => {
  const token = req.headers.authorization;
  const result = await user.logout(token);
  res.json(result);
});

app.get("/user", async (req, res) => {
  const token = req.headers.authorization;
  const result = await user.getUserByToken(token);
  res.json(result);
});

app.put("/user", async (req, res) => {
  const token = req.headers.authorization;
  const updatedUser = req.body;
  const result = await user.updateUser(token, updatedUser);
  res.json(result);
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const result = await user.sendForgotPasswordEmail(email);
  res.json(result);
});

app.post("/reset-password/:userId", async (req, res) => {
  const { userId } = req.params;
  const { password } = req.body;
  const result = await user.resetPassword(userId, password);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
