import * as z from "zod";

export const ReviewValidation = z.object({
  comment: z.string().min(3).max(400),
  likes: z.array(z.any()).optional(),
  gig_id: z.string().length(24, { message: "must be 24 characters long" }),
  user_id: z.string().length(24, { message: "must be 24 characters long" }),
});
