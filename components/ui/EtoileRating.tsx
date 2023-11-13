"use client";
import { etoile } from "@/public/assets";
import Image from "next/image";
import React from "react";

type Props = {
  rating: number;
  numberOfRaters: number;
};

const EtoileRating = ({ rating, numberOfRaters }: Props) => {
  return (
    <div className="flex px-3 font-tajwal pt-2 space-x-1 items-center">
      <Image
        className="h-[17px] w-[18px] max-lg:h-[14px] max-lg:w-[15px]"
        src={etoile}
        alt="etoile"
        width={200}
        height={200}
      />
      <p className="text-[16px] max-lg:text-[14px]  text-shadow-green">
        {rating}.0
      </p>
      <p className="text-[16px] max-lg:text-[14px] text-darkentwo">
        ({numberOfRaters})
      </p>
    </div>
  );
};

export default EtoileRating;
