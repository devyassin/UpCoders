import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { logo } from "@/public/assets";
const HeaderLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/welcome")}
      className="w-[7.5rem] h-[2.87625rem] cursor-pointer"
    >
      <Image src={logo} height={200} width={200} alt="logo" priority />
    </div>
  );
};

export default HeaderLogo;
