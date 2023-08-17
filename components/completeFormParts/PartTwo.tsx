import React from "react";

type Props = {
  active: string;
  type: string;
};

const PartTwo = ({ active, type }: Props) => {
  return (
    <div className={`${active == type ? "" : "hidden"} text-3xl`}>PartTwo</div>
  );
};

export default PartTwo;
