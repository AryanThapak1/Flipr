import express from "express";
import { SignUp, Login } from "./../Controller/AuthController.js";
import { getCustomer,getCustomers,CreateCustomer } from "../Controller/CustomerController.js";
const router = express.Router();
router.route("/Signup").post(SignUp);
router.route("/Login").post(Login);
router.route("/Customer").get(getCustomers).post(CreateCustomer);
router.route("/Customer/:id").get(getCustomer)

export default router;