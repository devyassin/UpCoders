import InputSearchBar from "../form/InputSearchBar";
import HeaderNavLogo from "../ui/HeaderNavLogo";
import { email, ring, heartborder } from "@/public/assets";
import Image from "next/image";
import UserProfileIcon from "../ui/UserProfileIcon";
import MobileShowBtn from "../ui/MobileShowBtn";
import Triangle from "../ui/Triangle";
import ModalUserProfile from "../ui/ModalUserProfile";

const HeaderNavBar = () => {
  return (
    <div className="flex h-[93px] items-center justify-between bg-dark-2 px-6 py-8 ">
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
        <h1 className="font-tajwal text-[22px] text-white opacity-90">
          Orders
        </h1>
        <div>
          <UserProfileIcon
            custumStylesImage="h-[50px] w-[50px]"
            custumStylesOnline="h-[15px] w-[15px] -translate-y-3 translate-x-8"
          />
          <div className="absolute right-5 top-[88px] flex flex-col items-end">
            <Triangle />
            <ModalUserProfile />
          </div>
        </div>
      </div>
      <MobileShowBtn />
    </div>
  );
};

export default HeaderNavBar;
