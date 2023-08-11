import React from "react";

type Props = {};

const AskedSignIn = (props: Props) => {
  return (
    <div className="text-white text-center font-tajwal pt-2 text-[14px] font-normal">
      Already have an account?{" "}
      <span className="text-shadow-green font-bold">Log In</span>
    </div>
  );
};

export default AskedSignIn;
