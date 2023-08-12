import { User } from "@/types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "@/constants/endpoints";
import axios from "axios";

const URL = `${API_URL}/api`;

const instance = axios.create({
  baseURL: URL,
});

// Add a new user
export const addUser = createAsyncThunk(
  "users/add",
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/signup`, user);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// Define the initial user state
const initialUser = {
  data: [],
  statusAddUser: "",
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
  error: "",
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
    setType: (state, { payload }) => {
      state.user.type = payload.currentTypeSelected;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.statusAddUser = "loading";
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.statusAddUser = "succeeded";
      })
      .addCase(addUser.rejected, (state, { payload }: any) => {
        state.statusAddUser = "failed";
        state.error = payload.response.data.message;
      });
  },
});

export const { handleUserForm, clearUser, setType } = userSlice.actions;
export default userSlice.reducer;
