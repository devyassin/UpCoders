import React from "react";

type Props = {
  text: string;
  customClasses?: string;
};

const FirstBtn = ({ text, customClasses }: Props) => {
  return (
    <button
      className={` ${customClasses} text-dark-3 text-center font-tajwal text-[22px] font-medium rounded-[25px] hover:bg-dark-green hover:duration-500 transition hover:opacity-80   hover:ease-in-out bg-light-green`}
    >
      {text}
    </button>
  );
};

export default FirstBtn;
