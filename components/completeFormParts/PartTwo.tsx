import React from "react";
import Input from "../form/Input";
import InputSelectExperienceLvl from "../form/InputSelectExperienceLvl";


type Props = {
  active: string;
  type: string;
};

const PartTwo = ({ active, type }: Props) => {
  return (
    <div className={`${active == type ? "" : "hidden"} `}>
      <div className="flex flex-col py-4 items-start">
        <label className="label">Experience Level</label>
        <InputSelectExperienceLvl />
      </div>
      <div className="flex flex-col py-4 items-start w-full">
        <label className="label">Education</label>
        <Input
          name="education"
          customClasses="mt-2 w-full"
          container="w-full"
          type="text"
          placeholder="Bachelor's degree in Computer Engineering"
        />
      </div>
      <div className="flex flex-col py-4 items-start w-full">
        <label className="label">Hourly Rate</label>
        <Input
          name="hourlyRate"
          customClasses="mt-2 w-full"
          container="w-full"
          type="number"
          placeholder="00.00 $"
        />
      </div>
    </div>
  );
};

export default PartTwo;
