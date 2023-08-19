"use client";
import { useAppSelector } from "@/store/store";
import { activeCard } from "@/store/WelcomeSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
  logo: string;
  text: string;

  type: string;
};

const CardWelcome = ({ logo, text, type }: Props) => {
  const dispatch = useDispatch();
  const currentTypeSelected = useAppSelector((state) => state.welcome.type);
  return (
    <div
      onClick={() => {
        dispatch(activeCard({ type }));
      }}
      className={`flex flex-col cursor-pointer  bg-dark-3 space-y-2 rounded-[20px] p-4 ${
        currentTypeSelected == type
          ? "card-selected-border"
          : "card-noselected-border"
      }`}
    >
      <div className="flex flex-row-reverse justify-between ">
        <div className="">
          {currentTypeSelected == type ? (
            <Image
              src="/assets/Active.png"
              priority
              alt="active"
              width={21}
              height={21}
            />
          ) : (
            <Image
              src="/assets/nonActive.png"
              priority
              alt="non active"
              width={21}
              height={21}
            />
          )}
        </div>
        <Image
          src={logo}
          alt={logo.substring(12, 16)}
          className="pt-2"
          priority
          width={50}
          height={50}
        />
      </div>
      <h1 className="title-card max-lg:text-[16px]">{text}</h1>
    </div>
  );
};

export default CardWelcome;