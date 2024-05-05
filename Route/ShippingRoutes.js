import express from "express";
import {getShippingDetails,getShippingDetail,createShipment } from "../Controller/ShippingDetailsController.js";
const router = express.Router();
router.route("/").get(getShippingDetails).post(createShipment);
router.route("/:id").get(getShippingDetail)

export default router