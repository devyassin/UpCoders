"use client";
import Image from "next/image";
import { upcoderLogo, upcoderLogoName } from "@/public/assets";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { getAllGigs } from "@/store/gigSlice";

const HeaderNavLogo = () => {
  const dispatch = useDispatch<any>();
  return (
    <Link
      onClick={() => dispatch(getAllGigs())}
      href={"/dashboard/home"}
      className="flex items-center space-x-6 max-sm:hidden"
    >
      <Image src={upcoderLogo} alt="logo navHeader " />
      <Image
        src={upcoderLogoName}
        alt="logo navHeader name"
        className="max-lg:hidden"
      />
    </Link>
  );
};

export default HeaderNavLogo;
