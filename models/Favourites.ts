import mongoose from "mongoose";
const Schema = mongoose.Schema;

const favouriteSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: [true, "Favourite must belong to a user"],
    },
    gig_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gig", // Reference to the Gig model
      required: [true, "Favourite must belong to a gig"],
    },
  },
  { timestamps: true }
);

// Export the Favourite model
const Favourite =
  mongoose.models.Favourite || mongoose.model("Favourite", favouriteSchema);

export default Favourite;
