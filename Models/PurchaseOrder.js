import mongoose from "mongoose";

const purchaseOrderSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  pricing: { type: Number, required: true },
  mrp: { type: Number, required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customers" },
});

const purchaseOrderModel = mongoose.model("PurchaseOrders", purchaseOrderSchema);

export default purchaseOrderModel;
