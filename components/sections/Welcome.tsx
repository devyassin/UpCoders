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
    <div className="flex flex-col px-6 py-6">
      <div className="w-[7.5rem] h-[2.87625rem]">
        <Image src={logo} height={200} width={200} alt="logo" priority />
      </div>
      <div className="card-welcome absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col max-lg:px-10 px-14 py-6">
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
        <div onClick={() => router.push("/signup")} className="mx-auto">
          <FirstBtn
            text={
              currentTypeSelected == "client"
                ? "Join as a client"
                : "Join as a freelancer"
            }
            customClasses=" w-[344px] h-[51px]"
          />
        </div>
        <AskedSignIn />
      </div>
      <div className="absolute bottom-0">
        <Copyright />
      </div>
    </div>
  );
};

export default Welcome;
