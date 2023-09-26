"use client";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "@/constants/endpoints";
import axios from "axios";
import { GigType } from "@/types";

const URL = `${API_URL}/api`;

const instance = axios.create({
  baseURL: URL,
  headers: {
    "content-type": "application/json",
  },
});

// Add a new gig
export const addGig = createAsyncThunk(
  "gigs/add",
  async (gig: GigType, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/gigs`, gig);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// Define the initial gig state
const initialState = {
  data: [],
  statusAddGig: "",
  gig: {
    picture: {
      fileUrl: "",
      fileKey: "",
    },
    title: "",
    category: "",
    deliveryTime: 0,
    description: "",
    note: "",
    price: 50,
    features: [],
    rating: 0,
    user_id: "",
  },
  errorAddGig: "",
};

const gigSlice = createSlice({
  name: "gigs",
  initialState,
  reducers: {
    handleGigForm: (
      state: any,
      { payload }: PayloadAction<{ name: any; value: any }>
    ) => {
      const { name, value } = payload;
      state.gig[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addGig.pending, (state) => {
        state.statusAddGig = "loading";
      })
      .addCase(addGig.fulfilled, (state, { payload }) => {
        state.statusAddGig = "succeeded";
      })
      .addCase(addGig.rejected, (state, { payload }: any) => {
        state.statusAddGig = "failed";
        state.errorAddGig = payload.response.data.message;
      });
  },
});

export const { handleGigForm } = gigSlice.actions;
export default gigSlice.reducer;
