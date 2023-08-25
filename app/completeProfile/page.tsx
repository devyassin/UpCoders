import CompleteProfile from "@/components/sections/CompleteProfile";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-dark-1 min-h-screen bg-[url(../public/assets/bgGlobal.png)]">
      <CompleteProfile />
    </div>
  );
};

export default page;
