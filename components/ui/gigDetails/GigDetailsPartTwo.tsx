import React from "react";
import TitleSec from "../titles/TitleSec";
import { cloock, features } from "@/public/assets";
import Image from "next/image";
import { GigType } from "@/types";
import OrderBtn from "@/components/btn/OrderBtn";
import GreenBtn from "@/components/btn/GreenBtn";

type Props = {
  gig: GigType;
};

const GigDetailsPartTwo = ({ gig }: Props) => {
  return (
    <div className="container-card-price flex flex-col pb-4 pt-4">
      {/* header card */}
      <div className="flex justify-between px-4">
        <TitleSec
          title="Price"
          classStyles="text-light-white-2 max-lg:text-[28px]"
        />
        <TitleSec
          title={`${gig.price}$`}
          classStyles="text-light-green max-lg:text-[28px]"
        />
      </div>
      <hr className="opacity-60 mt-4" />
      {/* Note */}
      <div className=" font-tajwal px-4 mt-2">
        <span className="text-light-white-2 text-[20px] max-lg:text-[16px]">
          Note :
        </span>
        <span className="text-[16px] max-lg:text-[14px]  text-white mt-1">
          {" "}
          {gig.note}
        </span>
      </div>
      {/* Time */}
      <div className="flex items-center px-4 mt-4 font-tajwal space-x-10">
        <Image src={cloock} alt="cloock" height={25} width={25} />
        <span className="text-light-white-2 text-[20px] max-lg:text-[16px]">
          {gig.deliveryTime} days delivery
        </span>
      </div>
      <div className="flex flex-col space-y-6">
        {gig.features.map((feature, i) => {
          return (
            <div className="flex items-center space-x-3 ml-10 mt-6">
              <Image
                src={features}
                alt={`feature icon ${i}`}
                height={20}
                width={20}
              />
              <span className="text-light-white-2 text-[16px] max-lg:text-[14px]">
                {feature}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col px-4 mt-6 space-y-4">
        {/* btn order */}
        <OrderBtn />
        {/* btn contact */}
        <GreenBtn
          text="Contact me"
          customClasses=" text-[20px] max-lg:text-[16px] h-[50px] w-full"
        />
      </div>
    </div>
  );
};

export default GigDetailsPartTwo;
