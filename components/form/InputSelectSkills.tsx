"use client";
import { countrySelectStylingTwo } from "@/constants/styling";
import { useEffect, useState } from "react";
import Select from "react-select";
import { skills } from "@/constants/skills";
import { useDispatch } from "react-redux";
import { handleUserForm } from "@/store/UserSlice";
type Props = {};

const InputSelectSkills = (props: Props) => {
  const dispatch = useDispatch();
  const [countryNames, setCountryNames] = useState([]);
  //   const handleCountryChange = (selected: any) => {
  //     dispatch(handleUserForm({ name: "country", value: selected.label }));
  //   };

  return (
    <div className="font-tajwal mt-8 w-full  ">
      <Select
        isMulti
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={countrySelectStylingTwo}
        options={skills}
        menuPosition="fixed"
        placeholder="Select skills ..."
        // onChange={handleCountryChange}
      />
    </div>
  );
};

export default InputSelectSkills;
