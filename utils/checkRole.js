import jwt from "jsonwebtoken";
import User from "../Models/User.js";

const checkRole = async (token) => {
    try {
        const email = jwt.verify(token, process.env.JWT_Secret);

        if (!email) {
            return false; // Return false if email is not present
        }

        const user = await User.findOne({ email });

        return user && user.role === "admin";
    } catch (error) {
        // Handle invalid token or other verification errors
        console.error("Error verifying token:");
        return false; // Return false if an error occurs
    }
};

export default checkRole;
