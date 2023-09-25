"use client";
import FirstBtn from "@/components/btn/FirstBtn";
import Input from "@/components/form/Input";
import InputPassword from "@/components/form/InputPassword";
import InputSelectCountry from "@/components/form/InputSelectCountry";
import AskedSignIn from "@/components/ui/AskedSignIn";
import Copyright from "@/components/ui/Copyright";
import useSignUp from "@/hooks/useSignUp";
import { freelancerLogo, clientLogo } from "@/public/assets";
import Image from "next/image";
import HeaderLogo from "../ui/HeaderLogo";

const SignUp = () => {
  const { currentTypeSelected, signUp, user } = useSignUp();

  return (
    <div className="flex-wrapper-col">
      {/* Logo header */}
      <HeaderLogo />
      {/* Form */}
      <div className="flex flex-col py-6 mx-auto my-8 card-welcome max-sm:w-full max-md:w-full max-sm:px-4 px-14 ">
        <h1 className="title-welcome max-lg:text-[24px] max-lg:mb-[24px] mb-[55px]">
          {currentTypeSelected == "client"
            ? "Sign up to find freelancers"
            : "Sign up to find work"}
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
              alt="freelancer Logo"
              className="pt-2 pb-8 max-md:pb-0"
              priority
              width={50}
              height={50}
            />
          )}
          <hr className="h-[1px] ml-4 w-full bg-gray-50 opacity-30" />
        </div>

        {/* Form */}
        <form onSubmit={signUp} className="flex flex-col max-md:pt-8 ">
          <div className="flex justify-between space-x-24 max-md:flex-col max-md:space-x-0 max-md:space-y-8">
            <Input
              customClasses="w-full"
              value={user.firstName}
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <Input
              customClasses="w-full"
              value={user.lastName}
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
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
          <InputSelectCountry />
          <FirstBtn
            customClasses="mt-8 py-2"
            text={
              currentTypeSelected == "client"
                ? "Join as a client"
                : "Join as a freelancer"
            }
          />
          <AskedSignIn />
        </form>
      </div>

      {/* Copyright */}
      <div>
        <Copyright />
      </div>
    </div>
  );
};

export default SignUp;
