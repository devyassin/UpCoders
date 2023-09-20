"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  ProfileModalVisibility: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showProfileModal: (state) => {
      state.ProfileModalVisibility = !state.ProfileModalVisibility;
    },
  },
});

export const { showProfileModal } = modalSlice.actions;
export default modalSlice.reducer;
