import Customer from "../Models/Customer.js";
import catchAsync from "../utils/catchAsync.js";
import checkRole from "../utils/checkRole.js";
export const CreateCustomer = catchAsync(async (req, res, next) => {

  const token = req.headers.authorization.split(" ")[1];
  
  if (!token) {
    return res.status(404).json({
      message: "Token not found",
    });
  }

  const isAdmin =await checkRole(token);

  if (!isAdmin) {
      return res.status(401).json({
        message: "Unauthorized",
      });
  }
  const newCustomer = await Customer.create(req.body);
  res.status(200).json({
    message: "Successful",
    data: newCustomer,
  });

  next();
});

export const getCustomers = catchAsync(async (req,res,next) => {

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
  
    const customers= await Customer.find();

    res.status(200).json({
        message:"Success",
        data:customers
    })
    next()
});


export const getCustomer = catchAsync(async (req,res,next) => {
   
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
    const customer= await Customer.findById(id);

    res.status(200).json({
        message:"Success",
        data:customer
    })

    next();
});
