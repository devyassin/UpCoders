import mongoose, { Schema } from "mongoose";
import { TaskType } from "@/types";
import { TypesTask } from "@/types/enumTypes";

const typesTask: TypesTask[] = [
  TypesTask.ToDo,
  TypesTask.InProgress,
  TypesTask.Done,
];

const taskSchema = new Schema<TaskType>(
  {
    picture: { fileUrl: String, fileKey: String },
    title: { type: String, required: true, unique: true },
    type: { type: String, required: true, enum: typesTask },
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Gig must belong to a user"],
    },
  },
  { timestamps: true }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
