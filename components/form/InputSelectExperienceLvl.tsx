"use client";
import { experienceLvlSelectStyling } from "@/constants/styling";
import Select from "react-select";
import { handleUserForm } from "@/store/UserSlice";
import { expertismeLvl } from "@/constants/domaineExpertisme";
import { useDispatch } from "react-redux";
type Props = {};

const InputSelectExperienceLvl = (props: Props) => {
  const dispatch = useDispatch();
    const handleLvlExperChange = (selected: any) => {
      dispatch(handleUserForm({ name: "experienceLvl", value: selected.label }));
    };

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
        onChange={handleLvlExperChange}
      />
    </div>
  );
};

export default InputSelectExperienceLvl;
