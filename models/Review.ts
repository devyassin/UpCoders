import mongoose, { Schema } from "mongoose";
import { ReviewType } from "@/types";

const reviewSchema = new Schema<ReviewType>(
  {
    comment: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    gig_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Gig",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
