
import mongoose from "moongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [ true, "password required"],
    min: [6, "Too small password"],
    max: 12,
  },
},{
    timestamps:true
});

export const User = mongoose.model("User", userSchema);
