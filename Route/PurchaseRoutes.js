import express from "express";
import {CreateOrder,getPurchaseOrder,getPurchaseOrders } from "../Controller/ProductController.js";
const router = express.Router();
router.route("/").get(getPurchaseOrders).post(CreateOrder);
router.route("/:id").get(getPurchaseOrder);

export default router