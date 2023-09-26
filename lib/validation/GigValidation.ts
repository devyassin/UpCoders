import * as z from "zod";

export const GigValidation = z.object({
  picture: z.object({
    fileUrl: z.string().url(),
    fileKey: z.string(),
  }),
  title: z.string().min(3).max(100),
  category: z.string().min(3).max(50),
  deliveryTime: z.number().int().positive(),
  description: z.string().min(10).max(1000),
  note: z.string().min(3).max(500),
  price: z.number().min(5, { message: "must be more than 5 dollars" }),
  features: z.array(z.string()).min(1).max(10),
  rating: z.number().min(1).max(5),
  user_id: z.string().length(24, { message: "must be 24 characters long" }),
});
