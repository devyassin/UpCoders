"use client";

import SignIn from "@/pages/SignIn";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-dark-1 min-h-screen bgGlobal">
      <SignIn />
    </div>
  );
};

export default page;
