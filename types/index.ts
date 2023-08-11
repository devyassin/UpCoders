// i can also use type UserType=z.infer<typeof UserSchema>

export enum ExperienceLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export type UserType = "client" | "freelancer";
export interface User {
  firstName: string;
  lastName: string;
  type: UserType;
  email: string;
  password: string;
  country: string;
  picture?: string;
  skills?: string[];
  domaineExpertise?: string;
  experienceLvl?: ExperienceLevel;
  hourlyRate?: number;
  bio?: string;
}
