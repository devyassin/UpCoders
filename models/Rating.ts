import mongoose, { Schema } from "mongoose";
import { RatingType } from "@/types";

const ratingSchema = new Schema<RatingType>(
  {
    rate: { type: Number, required: true },
    gig_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Gig",
      required: [true, "order must belong to a gig"],
    },
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "order must belong to a user"],
    },
  },
  { timestamps: true }
);

const Rating = mongoose.models.Rating || mongoose.model("Rating", ratingSchema);

export default Rating;
