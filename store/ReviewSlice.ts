"use client";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "@/constants/endpoints";
import axios from "axios";
import { ReviewType } from "@/types";

const URL = `${API_URL}/api`;

const instance = axios.create({
  baseURL: URL,
  headers: {
    "content-type": "application/json",
  },
});

// get all reviews
export const getAllReviews = createAsyncThunk("reviews/all", async () => {
  try {
    const response = await instance.get("/reviews");
    return response.data;
  } catch (error: any) {
    return new Error(error.message);
  }
});

// Add a new reviews
export const addReview = createAsyncThunk(
  "reviews/add",
  async (review: ReviewType, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/reviews`, review);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// Define the initial review state
const initialState = {
  data: [],
  statusAddReview: "",
  statusGetAllReviews: "",
  statusGetOneReview: "",
  review: {
    comment: "",
    likes: [],
    gig_id: "",
    user_id: "",
  },
  errorAddReview: "",
  errorGetAllReview: "",
  errorGetOneReview: "",
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    handleReviewForm: (
      state: any,
      { payload }: PayloadAction<{ name: any; value: any }>
    ) => {
      const { name, value } = payload;
      state.review[name] = value;
    },
    setUserIdAndGigId: (
      state: any,
      { payload }: PayloadAction<{ gig_id: string; user_id: string }>
    ) => {
      const { gig_id, user_id } = payload;
      state.review.gig_id = gig_id;
      state.review.user_id = user_id;
    },
    clearReview: (state) => {
      state.review = initialState.review;
    },
    clearStatusReview: (state) => {
      state.statusAddReview = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addReview.pending, (state) => {
        state.statusAddReview = "loading";
      })
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.statusAddReview = "succeeded";
      })
      .addCase(addReview.rejected, (state, { payload }: any) => {
        state.statusAddReview = "failed";
        state.errorAddReview = payload.response.data.message;
      })
      .addCase(getAllReviews.pending, (state) => {
        state.statusGetAllReviews = "loading";
      })
      .addCase(getAllReviews.fulfilled, (state, { payload }) => {
        state.statusGetAllReviews = "succeeded";
        state.data = payload;
      })
      .addCase(getAllReviews.rejected, (state, { payload }: any) => {
        state.statusGetAllReviews = "failed";
        state.errorGetAllReview = payload.response.data.message;
      });
  },
});

export const {
  clearReview,
  clearStatusReview,
  handleReviewForm,
  setUserIdAndGigId,
} = reviewSlice.actions;
export default reviewSlice.reducer;
