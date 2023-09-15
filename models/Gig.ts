import mongoose, { Schema } from "mongoose";
import { GigType } from "@/types";

const gigSchema = new Schema<GigType>({
  picture: { fileUrl: String, fileKey: String },
  title: { type: String, required: true },
  category: { type: String, required: true },
  deliveryTime: { type: Number, required: true },
  description: { type: String, required: true },
  note: { type: String, required: true },
  price: { type: Number, required: true },
  features: { type: [String], required: true },
  rating: { type: Number, required: true },
  user_id: { type: String, required: true },
});

const Gig = mongoose.models.Gig || mongoose.model("Gig", gigSchema);

export default Gig;
