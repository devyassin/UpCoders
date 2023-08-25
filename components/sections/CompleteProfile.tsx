"use client";

import PartOne from "@/components/completeFormParts/PartOne";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import Copyright from "@/components/ui/Copyright";
import Image from "next/image";
import React, { FormEvent, useEffect } from "react";
import { moveToback, moveToNext } from "@/store/CompleteProfileSlice";
import PartTwo from "@/components/completeFormParts/PartTwo";
import PartThree from "@/components/completeFormParts/PartThree";
import FirstBtn from "@/components/btn/FirstBtn";
import { useRouter } from "next/navigation";
import {  
  clearUser,
  currentUser,
  setIsCompleted,
  updateUser,
} from "@/store/UserSlice";
import { zodHandllingErrors } from "@/helpers/ZodHandlingErrors";
import { UserValidationCompleteProfile } from "@/lib/validation/UserValidation";
import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";

type Props = {};

const CompleteProfile = (props: Props) => {
  const dispatch = useDispatch<any>();
  const router = useRouter();
  useEffect(() => {
    if (statusUpdateUser === "succeeded" || statusUpdateUser === "loading")
      return;
    dispatch(currentUser());
    dispatch(setIsCompleted());
  }, []);

  const user = useAppSelector((state) => state.user.user);
  const activePart = useAppSelector(
    (state) => state.completeProfile.activePart
  );
  const statusUpdateUser = useAppSelector(
    (state) => state.user.statusUpdateUser
  );
  const errorUpdateUser = useAppSelector((state) => state.user.errorUpdateUser);

  useEffect(() => {
    if (statusUpdateUser === "succeeded") {
      Toastsuccess("Profile Complited !");
      router.push("/");
    }

    if (statusUpdateUser === "failed") {
      Toastfailed(errorUpdateUser);
    }

    if (statusUpdateUser === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusUpdateUser]);
  const handlSubmitCompleteProfile = (e: FormEvent) => {
    e.preventDefault();
    if (zodHandllingErrors(UserValidationCompleteProfile, user)) {
      dispatch(updateUser(user));
    }
  };
  return (
    <div className="flex flex-col px-6 pt-6">
      <div className="w-[7.5rem] h-[2.87625rem] cursor-pointer">
        <Image
          src="/assets/logo.png"
          height={200}
          width={200}
          alt="logo"
          priority
        />
      </div>
      <div
        className={`flex flex-col relative card-welcome mx-auto  px-14 py-6 my-8 w-1/2 max-lg:w-2/3  max-sm:w-full ${
          activePart == "one"
            ? "before:content-['1/3']"
            : activePart == "two"
            ? "before:content-['2/3']"
            : "before:content-['3/3']"
        } before:text-white before:opacity-60 before:w-fit before:rotate-[20deg] before:text-xl before:absolute before:right-3 before:font-tajwal before:leading-3 before:tracking-wider`}
      >
        <h1 className="title-welcome pt-6 max-lg:text-[24px]  mb-[14px]">
          Complete your profile
        </h1>

        {/* Form */}
        <form
          onSubmit={handlSubmitCompleteProfile}
          className="flex flex-col max-md:pt-8 h-fit "
        >
          <PartOne active={activePart} type="one" />
          <PartTwo active={activePart} type="two" />
          <PartThree active={activePart} type="three" />
          <div className="flex justify-between">
            <div className="flex justify-start ">
              <Image
                onClick={() => dispatch(moveToback())}
                className={`cursor-pointer -translate-x-8 hover:opacity-80 duration-150 ${
                  activePart == "one" ? "hidden" : ""
                }`}
                src="/assets/leftArrow.png"
                height={25}
                width={25}
                alt="left arrow"
              />
            </div>
            <div className="flex justify-end ">
              <Image
                onClick={() => dispatch(moveToNext())}
                className={`cursor-pointer translate-x-8 hover:opacity-80 duration-150 ${
                  activePart == "three" ? "hidden" : ""
                }`}
                src="/assets/rightArrow.png"
                height={25}
                width={25}
                alt="righ arrow"
              />
            </div>
          </div>
          <div
            className={`flex w-full justify-center ${
              activePart == "three" ? "" : "hidden"
            }`}
          >
            <FirstBtn
              customClasses="mt-8 py-2 w-2/3 max-md:w-full "
              text="Submit"
            />
          </div>
        </form>
      </div>
      <Copyright />
    </div>
  );
};

export default CompleteProfile;
