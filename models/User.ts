import mongoose, { Schema } from "mongoose";
import { User, ExperienceLevel } from "@/types";

const experienceLevels: ExperienceLevel[] = [
  ExperienceLevel.Beginner,
  ExperienceLevel.Intermediate,
  ExperienceLevel.Advanced,
];

const userSchema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  type: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => {
        return /\S+@\S+\.\S+/.test(value); // Basic email format validation
      },
      message: "Invalid email format",
    },
  },
  password: { type: String, required: true },
  country: { type: String, required: true },
  picture: String,
  skills: String,
  domaineExpertise: String,
  experienceLvl: { type: String, enum: experienceLevels },
  hourlyRate: Number,
  bio: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
