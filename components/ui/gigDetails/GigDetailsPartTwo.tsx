import React from "react";
import TitleSec from "../titles/TitleSec";
import { cloock } from "@/public/assets";
import Image from "next/image";

const GigDetailsPartTwo = () => {
  return (
    <div className="container-card-price flex flex-col h-[65vh] pt-4">
      {/* header card */}
      <div className="flex justify-between px-4">
        <TitleSec title="Price" classStyles="text-light-white-2" />
        <TitleSec title="30$" classStyles="text-light-green" />
      </div>
      <hr className="opacity-60 mt-4" />
      {/* Note */}
      <div className=" font-tajwal px-4 mt-2">
        <span className="text-light-white-2 text-[20px]">Note :</span>
        <span className="text-[16px]  text-white mt-1">
          {" "}
          Please ! Contact me before placing an order
        </span>
      </div>
      {/* Time */}
      <div className="flex items-center px-4 mt-4 font-tajwal space-x-10">
        <Image src={cloock} alt="cloock" height={25} width={25} />
        <span className="text-light-white-2 text-[20px]">3 days delivery</span>
      </div>
    </div>
  );
};

export default GigDetailsPartTwo;
