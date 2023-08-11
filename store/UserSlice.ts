import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial user state
const initialUser: { user: User } = {
  user: {
    firstName: "",
    lastName: "",
    type: "client",
    email: "",
    password: "",
    country: "",
    picture: undefined,
    skills: [],
    domaineExpertise: undefined,
    experienceLvl: undefined,
    hourlyRate: 0,
    bio: undefined,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    handleUserForm: (
      state: any,
      { payload }: PayloadAction<{ name: any; value: any }>
    ) => {
      const { name, value } = payload;
      state.user[name] = value;
    },
    clearUser: () => {
      return initialUser;
    },
  },
});

export const { handleUserForm, clearUser } = userSlice.actions;
export default userSlice.reducer;
