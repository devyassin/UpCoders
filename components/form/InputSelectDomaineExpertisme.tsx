"use client";
import { countrySelectStyling } from "@/constants/styling";
import Select from "react-select";
import { handleUserForm } from "@/store/UserSlice";
import { domainesExpertisme } from "@/constants/domaineExpertisme";
type Props = {};

const InputSelectDomaineExpertisme = (props: Props) => {
  //   const handleCountryChange = (selected: any) => {
  //     dispatch(handleUserForm({ name: "country", value: selected.label }));
  //   };

  return (
    <div className="font-tajwal mt-2 w-full  ">
      <Select
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={countrySelectStyling}
        options={domainesExpertisme}
        menuPosition="fixed"
        defaultValue={{
          value: "Full Stack Developer",
          label: "Full Stack Developer",
        }}
        // onChange={handleCountryChange}
      />
    </div>
  );
};

export default InputSelectDomaineExpertisme;
