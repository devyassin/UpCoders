"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activePart: "one",
};

const completeProfileSlice = createSlice({
  name: "completeProfile",
  initialState,
  reducers: {
    moveToNext: (state) => {
      if (state.activePart == "one") {
        state.activePart = "two";
      } else if (state.activePart == "two") {
        state.activePart = "three";
      }
    },
    moveToback: (state) => {
      if (state.activePart == "three") {
        state.activePart = "two";
      } else if (state.activePart == "two") {
        state.activePart = "one";
      }
    },
  },
});

export const { moveToNext, moveToback } = completeProfileSlice.actions;
export default completeProfileSlice.reducer;
