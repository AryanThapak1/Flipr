import catchAsync from "../utils/catchAsync.js";
import jwt from "jsonwebtoken";
import User from "./../Models/User.js";
export const SignUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(200).json({
    message: "Success",
    data: newUser,
  });

  next();
});

export const Login=catchAsync(async (req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;

    const user=await User.findOne({email}).select("+password");
    const confirmPassword=user.password;
    if(!user){
        return res.status(404).json({
            message:"Not Exist"
        })
    }

    const authenticated=await user.checkPassword(password,confirmPassword);
    if(!authenticated){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
    const token=jwt.sign(email,process.env.JWT_Secret);
    const role=user.role
    res.status(201).json({
        message:"Success",
        token,
        role
    })

    next();
})