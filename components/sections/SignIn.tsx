"use client";
import Input from "@/components/form/Input";
import InputPassword from "@/components/form/InputPassword";
import AskedSignIn from "@/components/ui/AskedSignIn";
import Copyright from "@/components/ui/Copyright";
import Image from "next/image";
import FirstBtn from "@/components/btn/FirstBtn";
import { freelancerLogo, clientLogo } from "@/public/assets";
import HeaderLogo from "../ui/HeaderLogo";
import useSignIn from "@/hooks/useSignIn";

const SignIn = () => {
  const { currentTypeSelected, signInFc, user } = useSignIn();
  return (
    <div className="flex-wrapper-col">
      {/* Logo header */}
      <HeaderLogo />

      {/* Form */}
      <div className="flex flex-col w-1/2 py-6 mx-auto my-8 card-welcome px-14 max-sm:px-4 max-lg:w-2/3 max-sm:w-full ">
        <h1 className="title-welcome max-lg:text-[24px]  mb-[14px]">
          Sign In{" "}
          {currentTypeSelected == "client" ? "as a client" : "As a Freelancer"}
        </h1>
        <div className="flex items-center justify-between ">
          <hr className="h-[1px] mr-4 w-full  bg-gray-50 opacity-30" />
          {currentTypeSelected == "client" ? (
            <Image
              src={clientLogo}
              alt="client logo"
              className="pt-2 pb-8 max-md:pb-0"
              priority
              width={50}
              height={50}
            />
          ) : (
            <Image
              src={freelancerLogo}
              alt="client logo"
              className="pt-2 pb-8 max-md:pb-0"
              priority
              width={50}
              height={50}
            />
          )}

          <hr className="h-[1px] ml-4 w-full bg-gray-50 opacity-30" />
        </div>

        {/* Form */}
        <form onSubmit={signInFc} className="flex flex-col max-md:pt-8 ">
          <Input
            value={user.email}
            name="email"
            customClasses="w-full mt-8"
            type="email"
            placeholder="Email"
          />
          <InputPassword
            value={user.password}
            name="password"
            customClasses="w-full mt-8"
            placeholder="Password"
          />

          <FirstBtn customClasses="mt-8 py-2" text="Login" />
          <AskedSignIn type="sign up" />
        </form>
      </div>

      {/* Copyright */}
      <div>
        <Copyright />
      </div>
    </div>
  );
};

export default SignIn;
