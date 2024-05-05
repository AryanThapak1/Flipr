import mongoose from "mongoose";
const shippingDetailsSchema = new mongoose.Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    purchaseOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseOrders' },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customers' }
});
const shippingDetailsModel=mongoose.model("ShippingDetails",shippingDetailsSchema);

export default shippingDetailsModel;