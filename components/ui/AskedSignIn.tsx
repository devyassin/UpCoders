import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  type?: string;
};

const AskedSignIn = ({ type }: Props) => {
  const router = useRouter();
  return (
    <div className="text-white text-center  font-tajwal pt-2 text-[14px] font-normal">
      {type ? "U dont have an account?" : "Already have an account?"}{" "}
      <span
        onClick={() => {
          if (type) {
            router.push("/signup");
          } else {
            router.push("/signin");
          }
        }}
        className="cursor-pointer text-shadow-green font-bold"
      >
        {type ? "Sign Up" : "Sign In"}
      </span>
    </div>
  );
};

export default AskedSignIn;
