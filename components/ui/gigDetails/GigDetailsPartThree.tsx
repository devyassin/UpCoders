import { GigType } from "@/types";
import React from "react";
import StringToHTML from "../StringToHTML";
import TitleSec from "../titles/TitleSec";

type Props = {
  gig: GigType;
};

const GigDetailsPartThree = ({ gig }: Props) => {
  return (
    <div className="flex flex-col">
      <TitleSec title="About this gig" classStyles="text-light-white-2 py-10" />
      <StringToHTML myString={gig.description} />
    </div>
  );
};

export default GigDetailsPartThree;
