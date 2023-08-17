"use client";
import InputSelectCountry from "@/components/form/InputSelectCountry";
import InputSelectSkills from "@/components/form/InputSelectSkills";
import Copyright from "@/components/ui/Copyright";
import Image from "next/image";
import React from "react";

type Props = {};

const CompleteProfile = (props: Props) => {
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
        className={`flex flex-col relative card-welcome mx-auto  px-14 py-6 my-8 w-1/2 max-lg:w-2/3  max-sm:w-full before:content-['1/3'] before:text-white before:opacity-60 before:w-fit before:rotate-[20deg] before:text-xl before:absolute before:right-3 before:font-tajwal before:leading-3 before:tracking-wider`}
      >
        <h1 className="title-welcome pt-6 max-lg:text-[24px]  mb-[14px]">
          Complete your profile
        </h1>

        {/* Form */}
        <form
          onSubmit={() => {
            console.log("hello");
          }}
          className="flex flex-col max-md:pt-8 "
        >
          <div className="flex max-md:flex-col  items-center">
            <label
              for="profilePic"
              className="w-[120px] h-[120px] max-md:w-[110px] max-md:h-[110px] flex items-center justify-center "
            >
              <Image
                className="w-full"
                quality={100}
                src="/assets/choosePic.png"
                height={150}
                width={150}
                alt="choose pic"
              />
            </label>

            <input
              name="profilePic"
              id="profilePic"
              type="file"
              className="bg-transparent -translate-x-20 max-md:-translate-x-0 border-none p-0 outline-none text-white custom-file-input"
            />
          </div>
          <div className="flex flex-col py-6 items-start">
            <label className="label">Skills</label>
            <InputSelectSkills />
          </div>
        </form>
      </div>
      <Copyright />
    </div>
  );
};

export default CompleteProfile;
