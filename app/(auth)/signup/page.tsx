"use client";
import SignUp from "@/components/sections/SignUp";
import { useAppSelector } from "@/store/store";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const currentTypeSelected = useAppSelector((state) => state.welcome.type);
  return (
    <div className="bg-dark-1 min-h-screen bg-[url(../public/assets/bgGlobal.png)] bg-no-repeat">
      <SignUp />
    </div>
  );
};

export default page;
