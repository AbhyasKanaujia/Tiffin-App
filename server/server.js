import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import serviceRoutes from "./routes/serviceRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use("/api/services", serviceRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`server started on port ${PORT} in ${NODE_ENV} mode`)
);
