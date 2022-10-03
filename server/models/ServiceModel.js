import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String },
    type: { type: String, required: true },
    mealCount: { type: Number, required: true },
    monthlyRent: { type: Number, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
  },
  { timestamp: true }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
