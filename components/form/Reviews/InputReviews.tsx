import React from "react";

type Props = {
  customClasses?: string;
  name: string;
  placeholder?: string;
  value?: string;
  container?: string;
};

const InputReviews = ({
  customClasses,
  placeholder,
  name,
  value,
  container,
}: Props) => {
  return (
    <div className={`${container}`}>
      <textarea
        rows={10}
        name={name}
        className={`input-form focus:bg-dark-6 outline-none  font-tajwal h-[61px] w-[273px] scrollbar-hide px-[28px] pt-[25px] pb-[19px] text-white ${customClasses}`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default InputReviews;
