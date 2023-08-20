"use client";
import { countrySelectStyling } from "@/constants/styling";
import Select from "react-select";
import { handleUserForm } from "@/store/UserSlice";
import { useDispatch } from "react-redux";
import { domainesExpertisme } from "@/constants/domaineExpertisme";
type Props = {};

const InputSelectDomaineExpertisme = (props: Props) => {
  const dispatch = useDispatch();
  const handleDomaineExperChange = (selected: any) => {
    dispatch(
      handleUserForm({ name: "domaineExpertise", value: selected.label })
    );
    dispatch(handleUserForm({ name: "isCompleted", value: true }));
  };

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
        onChange={handleDomaineExperChange}
      />
    </div>
  );
};

export default InputSelectDomaineExpertisme;
