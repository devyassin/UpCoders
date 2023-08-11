"use client";
import { configureStore } from "@reduxjs/toolkit";
import welcomeSlice from "./WelcomeSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import UserSlice from "./UserSlice";
const store = configureStore({
  reducer: {
    welcome: welcomeSlice,
    user: UserSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
