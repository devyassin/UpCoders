"use client";

import Copyright from "../ui/Copyright";
import Image from "next/image";
import React from "react";
import CardWelcome from "@/components/ui/CardWelcome";
import FirstBtn from "@/components/btn/FirstBtn";
import AskedSignIn from "@/components/ui/AskedSignIn";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/store";
import { logo, freelancerLogo, clientLogo } from "@/public/assets";

type Props = {};

const Welcome = (props: Props) => {
  const router = useRouter();
  const currentTypeSelected = useAppSelector((state) => state.welcome.type);
  return (
    <div className="flex flex-col min-h-[100vh] justify-between px-6 pt-6">
      {/* Logo Header */}
      <div className="w-[7.5rem] h-[2.87625rem] ">
        <Image src={logo} height={200} width={200} alt="logo" priority />
      </div>
      {/* Form */}
      <div className="card-welcome  flex flex-col mx-auto  px-14 max-sm:px-4 py-6 my-8 w-1/2 max-lg:w-2/3  max-md:w-full">
        <h1 className="title-welcome max-lg:text-[24px] max-lg:mb-[24px] mb-[55px]">
          Join as a client or freelancer
        </h1>
        <div className="flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 space-x-10 mb-[46px]">
          <CardWelcome
            type="client"
            logo={clientLogo}
            text="I’m a client, hiring for a project"
          />
          <CardWelcome
            type="freelancer"
            logo={freelancerLogo}
            text="I’m a freelancer, looking for work"
          />
        </div>
        <div onClick={() => router.push("/signup")} className="w-full flex justify-center">
          <FirstBtn
            text={
              currentTypeSelected == "client"
                ? "Join as a client"
                : "Join as a freelancer"
            }
            customClasses=" w-[344px] max-md:w-full h-[51px] "
          />
        </div>
        <AskedSignIn />
      </div>
      {/* Copyright */}
      <div>
        <Copyright />
      </div>
    </div>
  );
};

export default Welcome;
