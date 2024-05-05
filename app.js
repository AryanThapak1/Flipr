import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./Route/UserRoutes.js";
import ShippingRouter from "./Route/ShippingRoutes.js"
import PurchaseRouter from "./Route/PurchaseRoutes.js"
import cors from "cors"
dotenv.config();
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Database is connected");
  })
  .catch(() => {
    console.log("Database not Connected");
  });
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
app.use("/api/v1/User",UserRouter);
app.use("/api/v1/Purchase",PurchaseRouter);
app.use("/api/v1/Shipping",ShippingRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

