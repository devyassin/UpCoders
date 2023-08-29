"use client";
import { countrySelectStylingTwo } from "@/constants/styling";

import Select from "react-select";
import { skills } from "@/constants/skills";
import { useDispatch } from "react-redux";
import { handleUserForm } from "@/store/UserSlice";
type Props = {};

const InputSelectSkills = (props: Props) => {
  const dispatch = useDispatch();

  const handleSkillsChange = (skills: any) => {
    if (skills.length == "0") {
      dispatch(handleUserForm({ name: "skills", value: [] }));
    } else {
      const arrayOfskills = skills.map((skill: any) => skill.value);
      dispatch(handleUserForm({ name: "skills", value: arrayOfskills }));
    }
  };

  return (
    <div className="font-tajwal  mt-2 w-full  ">
      <Select
        isMulti
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={countrySelectStylingTwo}
        options={skills}
        menuPosition="fixed"
        placeholder="Select skills ..."
        onChange={handleSkillsChange}
      />
    </div>
  );
};

export default InputSelectSkills;
