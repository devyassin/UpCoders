import React from "react";
import Image from "next/image";
import { logoHeaderNav } from "@/public/assets";

const HeaderNavBar = () => {
  return (
    <div className="bg-dark-2 py-8 h-[93px] flex items-center px-6 ">
      <Image src={logoHeaderNav} alt="logo navHeader" />
    </div>
  );
};

export default HeaderNavBar;
