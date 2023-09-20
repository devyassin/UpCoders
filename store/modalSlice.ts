"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  ProfileModalVisibility: false,
  MobileNavigationVisibility: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showProfileModal: (state) => {
      state.ProfileModalVisibility = !state.ProfileModalVisibility;
    },
    showMobileNavigationModal: (state) => {
      state.MobileNavigationVisibility = !state.MobileNavigationVisibility;
    },
  },
});

export const { showProfileModal, showMobileNavigationModal } =
  modalSlice.actions;
export default modalSlice.reducer;
