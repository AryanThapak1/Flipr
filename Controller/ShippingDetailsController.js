import ShippingDetails from "../Models/ShippingDetails.js";
import catchAsync from "../utils/catchAsync.js";
import checkRole from "../utils/checkRole.js";
export const createShipment = catchAsync(async (req, res, next) => {
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

  const newShippingDetails = await ShippingDetails.create(req.body);
  res.status(200).json({
    message:"Successful",
    data:newShippingDetails
  });

  next();
});


export const getShippingDetails = catchAsync(async (req,res,next) => {
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

    const filter=req.query
    const shippingDetails= await ShippingDetails.find(filter).populate("purchaseOrder");

    res.status(200).json({
        message:"Success",
        data:shippingDetails
    })
    next();
});


export const getShippingDetail = catchAsync(async (req,res,next) => {
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
    const id=req.params.id;
    const shippingDetails= await ShippingDetails.findById(id);

    res.status(200).json({
        message:"Success",
        data:shippingDetails
    })
    next();
});




