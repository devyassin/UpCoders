"use client";
import PartOne from "@/components/completeFormParts/PartOne";
import Copyright from "@/components/ui/Copyright";
import PartTwo from "@/components/completeFormParts/PartTwo";
import PartThree from "@/components/completeFormParts/PartThree";
import FirstBtn from "@/components/btn/FirstBtn";
import HeaderLogo from "../ui/HeaderLogo";
import useCompleteProfile from "@/hooks/useCompleteProfile";
import MoveBtn from "../btn/MoveBtn";

const CompleteProfile = () => {
  const { activePart, completeProfile } = useCompleteProfile();

  return (
    <div className="flex-wrapper-col">
      {/* Logo Header */}
      <HeaderLogo />
      {/* Form */}
      <div
        className={`flex flex-col relative card-welcome mx-auto  px-14 max-sm:px-6 py-6 my-8 w-1/2 max-lg:w-2/3  max-sm:w-full ${
          activePart == "one"
            ? "before:content-['1/3']"
            : activePart == "two"
            ? "before:content-['2/3']"
            : "before:content-['3/3']"
        } before:text-white before:opacity-60 before:w-fit before:rotate-[20deg] 
            before:text-xl before:absolute before:right-3 before:font-tajwal before:leading-3 before:tracking-wider`}
      >
        <h1 className="title-welcome pt-6 max-lg:text-[24px]  mb-[14px]">
          Complete your profile
        </h1>

        {/* Form */}
        <form
          onSubmit={completeProfile}
          className="flex flex-col max-md:pt-8 h-fit "
        >
          <PartOne active={activePart} type="one" />
          <PartTwo active={activePart} type="two" />
          <PartThree active={activePart} type="three" />
          <div className="flex justify-between max-sm:px-6">
            <div className="flex justify-start ">
              <MoveBtn direction="left" activePart={activePart} />
            </div>
            <div className="flex justify-end ">
              <MoveBtn direction="right" activePart={activePart} />
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

      {/* Copyright */}
      <div>
        <Copyright />
      </div>
    </div>
  );
};

export default CompleteProfile;
