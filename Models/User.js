import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true,select:false },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

userSchema.pre("save",async function(next){
    if (this.isModified('password')) {
        try {
            // Hash the password with a salt round of 12
            this.password = await bcrypt.hash(this.password, 12);
        } catch (error) {
            // Handle any potential error while hashing the password
            return next(error);
        }
    }
})

userSchema.methods.checkPassword = async function(password) {
    try {
        // Compare the provided password with the hashed password
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        // Handle any potential error during password comparison
        throw new Error('Password comparison failed');
    }
};

const User = mongoose.model("User", userSchema);

export default User;
