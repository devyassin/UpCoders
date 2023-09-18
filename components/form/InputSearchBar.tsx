import React from "react";

type Props = {};

const InputSearchBar = (props: Props) => {
  return (
    <input
      type="text"
      name="searchbar"
      className={`input-form h-[61px] w-1/3 px-[28px]  pb-[19px] pt-[25px] font-tajwal text-white outline-none focus:bg-dark-6 max-2sm:w-2/3 max-sm:mr-10 max-sm:w-full `}
      placeholder="Enter the name of service or a gig"
    />
  );
};

export default InputSearchBar;
