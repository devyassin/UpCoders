import { ExperienceLevel } from "@/types/enumTypes";
import * as z from "zod";

export const UserGlobalProprietes = z.object({
  firstName: z.string().min(5).max(50),
  lastName: z.string().min(5).max(50),
  type: z.enum(["client", "freelancer"]),
  email: z.string().email(),
  country: z.string().nonempty({ message: "u should enter ur country" }),
});

export const UserValidation = UserGlobalProprietes.extend({
  password: z.string().min(8), // Minimum password length
});

export const UserValidationSignIn = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const UserValidationCompleteProfile = UserGlobalProprietes.extend({
  picture: z.object({
    fileUrl: z.string().url(),
    fileKey: z.string(),
  }),
  skills: z.array(z.string()), // Assuming skills can be an array of strings
  domaineExpertise: z.string(),
  experienceLvl: z.enum([
    ExperienceLevel.Beginner,
    ExperienceLevel.Intermediate,
    ExperienceLevel.Advanced,
  ]),
  isCompleted: z.boolean().optional(),
  education: z.string().min(10).max(100),
  hourlyRate: z
    .number()
    .min(5, { message: "must be more than 5 dollars per hour" }), // Assuming minimum hourly rate is 5
  bio: z.string().min(3).max(1000),
});

// an Example of how to use refine

// const profile = z.object({
//   firstName: z.string({
//     required_error: "First name is required",
//     invalid_type_error: "First name must be a string",
//   }),

//   lastName: z.string({
//     required_error: "Last name is required",
//     invalid_type_error: "Last name must be a string",
//   }),

//   mobileNumber: z.number({
//     required_error: "Mobile number is required",
//     invalid_type_error: "Mobile number must be a number",
//   }),

//   confirmMobileNumber: z.number({}),
// })
// .refine((data) => data.mobileNumber === data.confirmMobileNumber, {
//   message: "Oops! Phone numbers doesnt match",
// });
