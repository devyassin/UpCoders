import Image from "next/image";
import React from "react";
import InputSelectDomaineExpertisme from "../form/InputSelectDomaineExpertisme";
import InputSelectSkills from "../form/InputSelectSkills";

type Props = {
  active: string;
  type: string;
};

const PartOne = ({ active, type }: Props) => {
  return (
    <div className={`${active == type ? "" : "hidden"}`}>
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
      <div className="flex flex-col py-4 items-start">
        <label className="label">Skills</label>
        <InputSelectSkills />
      </div>
      <div className="flex flex-col py-4 items-start">
        <label className="label">Domain Expertise</label>
        <InputSelectDomaineExpertisme />
      </div>
    </div>
  );
};

export default PartOne;
