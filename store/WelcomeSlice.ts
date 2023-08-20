"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  type: "client",
};

const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  reducers: {
    activeCard: (state, action: PayloadAction<{ type: string }>) => {
      state.type = action.payload.type;
    },
  },
});

export const { activeCard } = welcomeSlice.actions;
export default welcomeSlice.reducer;
