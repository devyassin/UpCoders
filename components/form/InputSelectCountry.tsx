"use client";
import { countrySelectStyling } from "@/constants/styling";
import { useEffect, useState } from "react";
import Select from "react-select";
import { fetchCountryNames } from "../../helpers/GetContry";
import { useDispatch } from "react-redux";
import { handleUserForm } from "@/store/UserSlice";
type Props = {};

const InputSelectCountry = (props: Props) => {
  const dispatch = useDispatch();
  const [countryNames, setCountryNames] = useState([]);
  const handleCountryChange = (selected: any) => {
    dispatch(handleUserForm({ name: "country", value: selected.label }));
  };
  useEffect(() => {
    // Fetch country names when the component mounts
    fetchCountryNames()
      .then((names: any) => {
        const options = names.map((name: string) => {
          return { value: name, label: name };
        });
        setCountryNames(options);
      })
      .catch((error: Error) => {
        console.error("Error fetching country names:", error);
      });
  }, []);

  return (
    <div className="font-tajwal mt-8  ">
      <Select
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={countrySelectStyling}
        options={countryNames}
        menuPosition="fixed"
        defaultValue={{ value: "Morocco", label: "Morocco" }}
        onChange={handleCountryChange}
      />
    </div>
  );
};

export default InputSelectCountry;
