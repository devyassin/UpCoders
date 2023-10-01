import React, { ReactNode } from "react";

type GridWrapperProps = {
  children: ReactNode;
};

const GridWrapper = ({ children }: GridWrapperProps) => {
  return (
    <div className="text-white text-5xl grid grid-cols-3 max-lg:grid-cols-2 max-lg:mx-16 max-sm:grid-cols-1 max-sm:mx-16 gap-16 mt-8 mx-10">
      {children}
    </div>
  );
};

export default GridWrapper;
