import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    mobileNumber: { type: String, required: true },
    city: { type: String, required: true }
});

const customerModel=mongoose.model("Customers",customerSchema);

export default customerModel;