"use client";
import { User } from "@/types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "@/constants/endpoints";
import axios from "axios";

const URL = `${API_URL}/api`;

const instance = axios.create({
  baseURL: URL,
  headers: {
    "content-type": "application/json",
  },
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

// sign in
export const signIn = createAsyncThunk(
  "users/signin",
  async ({ email, password }: any, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/signin`, { email, password });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// logout
export const logOut = createAsyncThunk("users/logout", async () => {
  try {
    const response = await instance.get("/logout");
    return response.data;
  } catch (error: any) {
    return new Error(error.message);
  }
});

// Get current user

export const currentUser = createAsyncThunk("users/me", async () => {
  try {
    const response = await instance.get("/me");
    return response.data;
  } catch (error: any) {
    return new Error(error.message);
  }
});

// Update the user

export const updateUser = createAsyncThunk("updateUser", async (user: any) => {
  try {
    const response = await instance.patch("/me", user);
    return response.data;
  } catch (error: any) {
    return new Error(error.message);
  }
});

// Define the initial user state
const initialState = {
  data: [],
  statusAddUser: "",
  statusSignIn: "",
  statusLogout: "",
  statusCurrentUser: "",
  statusUpdateUser: "",
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
    education: "",
    bio: undefined,
    isCompleted: false,
  },
  error: "",
  errorSignIn: "",
  errorLogOut: "",
  errorCurrentUser: "",
  errorUpdateUser: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUserForm: (
      state: any,
      { payload }: PayloadAction<{ name: any; value: any }>
    ) => {
      const { name, value } = payload;
      state.user[name] = value;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },

    setIsCompleted: (state) => {
      state.user.isCompleted = true;
    },
    clearStatus: (state) => {
      state.statusAddUser = "";
      state.statusCurrentUser = "";
      state.statusLogout = "";
      state.statusSignIn = "";
      state.statusUpdateUser = "";
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
      })
      .addCase(signIn.pending, (state) => {
        state.statusSignIn = "loading";
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.statusSignIn = "succeeded";
        state.user = payload.user;
      })
      .addCase(signIn.rejected, (state, { payload }: any) => {
        state.statusSignIn = "failed";
        state.errorSignIn = payload.response.data.message;
      })
      .addCase(logOut.pending, (state) => {
        state.statusLogout = "loading";
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.statusLogout = "succeeded";
        state.statusSignIn = initialState.statusSignIn;
        state.statusAddUser = initialState.statusAddUser;
      })
      .addCase(logOut.rejected, (state, { payload }: any) => {
        state.statusLogout = "failed";
        state.errorLogOut = payload.response.data.message;
      })
      .addCase(currentUser.pending, (state) => {
        state.statusCurrentUser = "loading";
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.statusCurrentUser = "succeeded";
        state.user = payload.data;
      })
      .addCase(currentUser.rejected, (state, { payload }: any) => {
        state.statusCurrentUser = "failed";
        state.errorCurrentUser = payload.response.data.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.statusUpdateUser = "loading";
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.statusUpdateUser = "succeeded";
        state.data = payload.data;
      })
      .addCase(updateUser.rejected, (state, { payload }: any) => {
        state.statusUpdateUser = "failed";
        state.errorUpdateUser = payload.response.data.message;
      });
  },
});

export const {
  handleUserForm,
  clearUser,
  setType,
  setIsCompleted,
  clearStatus,
} = userSlice.actions;
export default userSlice.reducer;
