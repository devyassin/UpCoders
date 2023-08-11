import { ExperienceLevel } from "@/types";
import * as z from "zod";

export const UserValidation = z.object({
  firstName: z.string().min(5).max(50),
  lastName: z.string().min(5).max(50),
  type: z.enum(["client", "freelancer"]),
  email: z.string().email(),
  password: z.string().min(8), // Minimum password length
  country: z.string().nonempty({ message: "u should enter ur country" }),
  picture: z.string().url().optional(),
  skills: z.array(z.string()).optional(), // Assuming skills can be an array of strings
  domaineExpertise: z.string().optional(),
  experienceLvl: z
    .enum([
      ExperienceLevel.Beginner,
      ExperienceLevel.Intermediate,
      ExperienceLevel.Advanced,
    ])
    .optional(),
  hourlyRate: z.number().min(0).optional(), // Assuming minimum hourly rate is 0
  bio: z.string().min(3).max(1000).optional(),
});
