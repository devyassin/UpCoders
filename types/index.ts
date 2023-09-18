// i can also use type UserType=z.infer<typeof UserSchema>

import { Category, ExperienceLevel, StatusOrder, TypesTask } from "./enumTypes";
import { Types } from "mongoose";

export type UserType = "client" | "freelancer";
export interface User {
  firstName: string;
  lastName: string;
  type: UserType | string;
  email: string;
  password: string;
  country: string;
  picture?: { fileUrl: string; fileKey: string };
  skills?: string[];
  domaineExpertise?: string;
  experienceLvl?: ExperienceLevel;
  hourlyRate?: number;
  education?: string;
  bio?: string;
  isCompleted?: boolean;
}

export interface GigType {
  picture: { fileUrl: string; fileKey: string };
  title: string;
  category: Category;
  deliveryTime: number;
  description: string;
  note: string;
  price: number;
  features: string[];
  rating: number;
  user_id: Types.ObjectId;
}

export interface TaskType {
  picture: { fileUrl: string; fileKey: string };
  type: TypesTask;
  title: string;
  user_id: Types.ObjectId;
}

export interface OrderType {
  description: string;
  status: StatusOrder;
  gig_id: Types.ObjectId;
  user_id: Types.ObjectId;
}

export interface RatingType {
  rate: number;
  gig_id: Types.ObjectId;
  user_id: Types.ObjectId;
}

export interface ReviewType {
  comment: string;
  likes: [Types.ObjectId];
  gig_id: Types.ObjectId;
  user_id: Types.ObjectId;
}
