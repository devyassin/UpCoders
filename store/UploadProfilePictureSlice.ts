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

// Update the user

export const updateUserProfilePicture = createAsyncThunk(
  "updateUserProfilePicture",
  async (newPicture: any) => {
    try {
      const response = await instance.patch("/uploadthing", newPicture);
      return response.data;
    } catch (error: any) {
      return new Error(error.message);
    }
  }
);

const initialState = {
  uploadingImageStatus: "",
  uploadingTomongoDbStatus: "",
  image: null,
  errorUploadingImage: "",
  errorUploadingTomongoDb: "",
};

const uploadProfilePrictureSlice = createSlice({
  name: "uploadProfilePricture",
  initialState,
  reducers: {
    setImageStatusToloading: (state) => {
      state.uploadingImageStatus = "loading";
    },
    setImageStatusToSuccess: (state) => {
      state.uploadingImageStatus = "success";
    },
    setImageStatusToFailed: (state) => {
      state.uploadingImageStatus = "failed";
    },
    setImageInfo: (state, { payload }) => {
      state.image = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfilePicture.pending, (state) => {
        state.uploadingTomongoDbStatus = "loading";
      })
      .addCase(updateUserProfilePicture.fulfilled, (state, { payload }) => {
        state.uploadingTomongoDbStatus = "succeeded";
      })
      .addCase(updateUserProfilePicture.rejected, (state, { payload }: any) => {
        state.uploadingTomongoDbStatus = "failed";
        state.errorUploadingTomongoDb = payload.response.data.message;
      });
  },
});

export const {
  setImageStatusToFailed,
  setImageStatusToSuccess,
  setImageStatusToloading,
  setImageInfo,
} = uploadProfilePrictureSlice.actions;
export default uploadProfilePrictureSlice.reducer;
