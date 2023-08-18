"use client";
import { experienceLvlSelectStyling } from "@/constants/styling";
import Select from "react-select";
import { handleUserForm } from "@/store/UserSlice";
import { expertismeLvl } from "@/constants/domaineExpertisme";
type Props = {};

const InputSelectExperienceLvl = (props: Props) => {
  //   const handleCountryChange = (selected: any) => {
  //     dispatch(handleUserForm({ name: "country", value: selected.label }));
  //   };

  return (
    <div className="font-tajwal mt-2 w-full  ">
      <Select
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={experienceLvlSelectStyling}
        options={expertismeLvl}
        menuPosition="fixed"
        defaultValue={{
          value: "Intermediate",
          label: "Intermediate",
        }}
        // onChange={handleCountryChange}
      />
    </div>
  );
};

export default InputSelectExperienceLvl;
