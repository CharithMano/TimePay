/** @format */

import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db";

import userRoutes from "./routs/userRouts";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "";

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.get("/info", async (req, res) => {
  res.send({
    PORT: PORT,
    NODE_ENV: process.env.ENV,
    DATABASE_URL: process.env.DB_URL,
  });
});
app.use("/api/v1/user", userRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("MySQL connected!");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
