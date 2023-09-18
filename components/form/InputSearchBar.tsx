import React from "react";

type Props = {};

const InputSearchBar = (props: Props) => {
  return (
    <input
      type="text"
      name="searchbar"
      className={`input-form focus:bg-dark-6 outline-none  font-tajwal h-[61px] w-1/3 px-[28px] pt-[25px] pb-[19px] text-white `}
      placeholder="Enter the name of service or a gig"
    />
  );
};

export default InputSearchBar;
