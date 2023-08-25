import Welcome from "@/components/sections/Welcome";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-dark-1 h-screen bg-[url(../public/assets/bgGlobal.png)] ">
      <Welcome />
    </div>
  );
};

export default page;
