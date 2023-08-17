import React from "react";

type Props = {
  active: string;
  type: string;
};

const PartThree = ({ active,type }: Props) => {
  return <div className={`${active == type ? "" : "hidden"} text-3xl`}>PartThree</div>;
};

export default PartThree;
