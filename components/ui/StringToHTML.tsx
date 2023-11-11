import React from "react";

interface StringToHTMLProps {
  myString: string;
}

const StringToHTML = ({ myString }: StringToHTMLProps) => {
  return (
    <div
      id="gig_details_container"
      className="text-white"
      dangerouslySetInnerHTML={{ __html: myString }}
    ></div>
  );
};

export default StringToHTML;
