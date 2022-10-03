import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    name: { type: String, requried: true },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userModel);

export default User;
