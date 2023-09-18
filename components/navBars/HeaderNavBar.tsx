import InputSearchBar from "../form/InputSearchBar";
import HeaderNavLogo from "../ui/HeaderNavLogo";
import { email, ring, heartborder } from "@/public/assets";
import Image from "next/image";
import UserProfileIcon from "../ui/UserProfileIcon";
import MobileShowBtn from "../ui/MobileShowBtn";

const HeaderNavBar = () => {
  return (
    <div className="bg-dark-2 py-8 h-[93px] flex items-center justify-between px-6 ">
      <HeaderNavLogo />
      <InputSearchBar />
      <div className="flex items-center space-x-10 max-2sm:hidden">
        <Image className="cursor-pointer" src={ring} alt="ring logo" />
        <Image className="cursor-pointer" src={email} alt="email logo" />
        <Image
          className="cursor-pointer"
          src={heartborder}
          alt="heartborder logo"
        />
        <h1 className="text-white font-tajwal text-[22px] opacity-90">
          Orders
        </h1>
        <UserProfileIcon />
      </div>
      <MobileShowBtn />
    </div>
  );
};

export default HeaderNavBar;
