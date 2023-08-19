"use client";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import welcomeSlice from "./WelcomeSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import UserSlice from "./UserSlice";
import CompleteProfileSlice from "./CompleteProfileSlice";
const store = configureStore({
  reducer: {
    welcome: welcomeSlice,
    user: UserSlice,
    completeProfile: CompleteProfileSlice,
  },
  middleware: [thunkMiddleware],
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;