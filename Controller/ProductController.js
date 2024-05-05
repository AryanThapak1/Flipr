import PurchaseOrder from "../Models/PurchaseOrder.js";
import catchAsync from "../utils/catchAsync.js";
import checkRole from "../utils/checkRole.js";
export const CreateOrder = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(404).json({
      message: "Token not found",
    });
  }

  const isAdmin = await checkRole(token);

  if (!isAdmin) {
      return res.status(401).json({
        message: "Unauthorized",
      });
  }

  console.log(isAdmin)

  const newPurchaseOrder = await PurchaseOrder.create(req.body);
  res.status(200).json({
    message: "Successful",
    data: newPurchaseOrder,
  });
  next();
});

export const getPurchaseOrders = catchAsync(async (req,res,next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(404).json({
      message: "Token not found",
    });
  }

  const isAdmin = await checkRole(token);

  if (!isAdmin) {
      return res.status(401).json({
        message: "Unauthorized",
      });
  }
  const purchaseOrders = await PurchaseOrder.find();

  res.status(200).json({
    message: "Success",
    data: purchaseOrders,
  });
  next();
});

export const getPurchaseOrder = catchAsync(async (req,res,next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(404).json({
      message: "Token not found",
    });
  }

  const isAdmin = await checkRole(token);

  if (!isAdmin) {
      return res.status(401).json({
        message: "Unauthorized",
      });
  }
  const id = req.params.id;
  const purchaseOrder = await PurchaseOrder.findById(id);

  res.status(200).json({
    message: "Success",
    data: purchaseOrder,
  });
  next();
});
