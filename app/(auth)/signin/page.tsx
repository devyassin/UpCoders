"use client";

import SignIn from "@/components/sections/SignIn";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-dark-1 min-h-screen bg-[url(../public/assets/bgGlobal.png)]">
      <SignIn />
    </div>
  );
};

export default page;
