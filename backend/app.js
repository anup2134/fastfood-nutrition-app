import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./database/dbConnection.js";
import itemRouter from "./routes/itemRouter.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

dbConnection();
app.use("/api/v1/items", itemRouter);

export default app;
