import mongoose, { Schema } from "mongoose";
import { OrderType } from "@/types";
import { StatusOrder } from "@/types/enumTypes";

const statusOrder: StatusOrder[] = [
  StatusOrder.NEW,
  StatusOrder.COMPLITED,
  StatusOrder.CANCELLED,
];

const orderSchema = new Schema<OrderType>(
  {
    description: { type: "string", required: true },
    status: { type: String, required: true, enum: statusOrder },
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

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
