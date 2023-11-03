import Image from "next/image";
import React from "react";
import { orderArrow } from "@/public/assets";

const OrderBtn = () => {
  return (
    <div className="flex bg-[#0E0C0C] px-4 items-center justify-between h-[50px] cursor-pointer hover:opacity-90 duration-150 ease-in-out rounded-[7px] text-white w-full font-tajwal text-[20px]">
      <div></div>
      <div>Order</div>
      <Image src={orderArrow} alt="order arrow" width={15} height={15} />
    </div>
  );
};

export default OrderBtn;
