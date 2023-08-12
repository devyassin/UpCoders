"use client";
import FirstBtn from "@/components/btn/FirstBtn";
import Input from "@/components/form/Input";
import InputPassword from "@/components/form/InputPassword";
import { useRouter } from "next/navigation";
import InputSelectCountry from "@/components/form/InputSelectCountry";
import AskedSignIn from "@/components/ui/AskedSignIn";
import Copyright from "@/components/ui/Copyright";
import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";
import { UserValidation } from "@/lib/validation/UserValidation";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";

import Image from "next/image";

import React, { FormEvent, useEffect } from "react";
import { addUser, clearUser, setType } from "@/store/UserSlice";
import { User } from "@/types";
import { zodHandllingErrors } from "@/helpers/ZodHandlingErrors";

type Props = {};

const SignUp = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const currentTypeSelected = useAppSelector((state) => state.welcome.type);
  const user: User = useAppSelector((state) => state.user.user);
  const error = useAppSelector((state) => state.user.error);
  const statusAddUser = useAppSelector((state) => state.user.statusAddUser);
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    dispatch(setType({ currentTypeSelected }));

    if (zodHandllingErrors(UserValidation, user)) {
      dispatch(addUser(user));
    }
  };

  useEffect(() => {
    if (statusAddUser === "succeeded") {
      Toastsuccess("User Added !");
      dispatch(clearUser());
    }

    if (statusAddUser === "failed") {
      Toastfailed(error);
    }

    if (statusAddUser === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusAddUser]);
  return (
    <div className="flex flex-col px-6 pt-6 ">
      <div
        onClick={() => router.push("/welcome")}
        className="w-[7.5rem] h-[2.87625rem] cursor-pointer"
      >
        <Image
          src="/assets/logo.png"
          height={200}
          width={200}
          alt="logo"
          priority
        />
      </div>
      <div className="flex flex-col card-welcome mx-auto  px-14 py-6 my-8  ">
        <h1 className="title-welcome max-lg:text-[24px] max-lg:mb-[24px] mb-[55px]">
          {currentTypeSelected == "client"
            ? "Sign up to find freelancers"
            : "Sign up to find work"}
        </h1>
        <div className="flex items-center  justify-between ">
          <hr className="h-[1px] mr-4 w-full  bg-gray-50 opacity-30" />
          {currentTypeSelected == "client" ? (
            <Image
              src="/assets/clientLogo.png"
              alt="client logo"
              className="pt-2 max-md:pb-0 pb-8"
              priority
              width={50}
              height={50}
            />
          ) : (
            <Image
              src="/assets/freelancerLogo.png"
              alt="freelancer Logo"
              className="pt-2 max-md:pb-0 pb-8"
              priority
              width={50}
              height={50}
            />
          )}
          <hr className="h-[1px] ml-4 w-full bg-gray-50 opacity-30" />
        </div>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="flex flex-col max-md:pt-8 ">
          <div className="flex justify-between max-md:flex-col max-md:space-x-0 max-md:space-y-8 space-x-24">
            <Input
              value={user.firstName}
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <Input
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
      <Copyright />
    </div>
  );
};

export default SignUp;
