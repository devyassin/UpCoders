import React from "react";

type Props = {
  title: string;
  classStyles: string;
};

const TitleSec = ({ title, classStyles }: Props) => {
  return (
    <h1 className={`${classStyles} font-tajwal text-[36px] font-bold`}>
      {title}
    </h1>
  );
};

export default TitleSec;
