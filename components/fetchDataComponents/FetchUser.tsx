"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "@/store/UserSlice";

const FetchUser = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(currentUser());
  }, []);
  return <div className="hidden">fetchUser</div>;
};

export default FetchUser;
