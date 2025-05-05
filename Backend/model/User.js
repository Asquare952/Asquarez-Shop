import mongoose from "mongoose";

const UserShema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 3,
      max: 50,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 3,
      max: 50,
      required: true,
    },
    role: {
      type: String
    },
    resetToken: String,
    tokenExpriration: Date,
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserShema);
export default User;
