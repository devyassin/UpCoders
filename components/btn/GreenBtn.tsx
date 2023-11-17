import React from "react";

type Props = {
  text: string;
  customClasses?: string;
};

const GreenBtn = ({ text, customClasses }: Props) => {
  return (
    <div
      className={`flex bg-light-green text-black px-4 items-center  justify-center  
      ${customClasses}
      cursor-pointer hover:opacity-90 duration-150 ease-in-out rounded-[7px]  font-tajwal `}
    >
      <div>{text}</div>
    </div>
  );
};

export default GreenBtn;
