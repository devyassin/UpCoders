"use client";
import { contry } from "@/public/assets";
import Image from "next/image";
import React from "react";
import EtoileRating from "../EtoileRating";

type Props = {
  gig: any;
};

const GigDetailsPartOne = ({ gig }: Props) => {
  const { title, rating } = gig;
  return (
    <div>
      <h1 className="text-[36px] text-white font-semibold font-tajwal pb-6">
        {title}
      </h1>
      <div className="flex justify-between items-start ">
        <div className="flex space-x-2 items-center">
          {/* picture */}
          <Image
            src={gig?.user_id?.picture?.fileUrl}
            alt={gig?.user_id?.picture?.fileKey}
            width={300}
            height={300}
            className="h-[70px] w-[70px] rounded-full mr-2"
          />
          {/* info 1 */}
          <div className="flex flex-col items-start  space-y-1">
            <h3 className="text-light-white pl-3 font-tajwal text-[20px]">{`${gig?.user_id?.firstName} ${gig?.user_id?.lastName}`}</h3>
            <EtoileRating rating={rating} numberOfRaters={0} />
          </div>
        </div>
        {/* info 2 */}
        <div className="flex items-center space-x-1">
          <Image
            className="h-[18px] w-[19px]"
            src={contry}
            alt="contry"
            width={200}
            height={200}
          />
          <h3 className="text-darkentwo text-[16px] font-tajwal">
            {gig?.user_id?.country}
          </h3>
        </div>
      </div>
      {/* image gig */}
      <div>
        <Image
          className="w-[519px] h-[284px] rounded-md border border-white mt-10"
          src={gig?.picture?.fileUrl}
          alt={gig?.picture?.fileKey}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default GigDetailsPartOne;
