"use client";
import SignUp from "@/pages/SignUp";
import { useAppSelector } from "@/store/store";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const currentTypeSelected = useAppSelector((state) => state.welcome.type);
  return (
    <div className="bg-dark-1 h-fit bgGlobal">
      <SignUp />
    </div>
  );
};

export default page;