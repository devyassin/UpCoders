"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "@/store/UserSlice";
import { getAllGigs } from "@/store/gigSlice";

const FetchData = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(currentUser());
    dispatch(getAllGigs());
  }, []);
  return <div className="hidden">fetchUser</div>;
};

export default FetchData;
