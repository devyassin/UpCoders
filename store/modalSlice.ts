"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  ProfileModalVisibility: false,
  MobileNavigationVisibility: false,
  NotificationsModalVisibility: false,
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
    showNotificationsModal: (state) => {
      state.NotificationsModalVisibility = !state.NotificationsModalVisibility;
    },
  },
});

export const {
  showProfileModal,
  showMobileNavigationModal,
  showNotificationsModal,
} = modalSlice.actions;
export default modalSlice.reducer;
