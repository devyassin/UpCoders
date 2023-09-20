import InputSearchBar from "../form/InputSearchBar";
import HeaderNavLogo from "../ui/HeaderNavLogo";
import { email, ring, heartborder } from "@/public/assets";
import Image from "next/image";
import UserProfileIcon from "../ui/UserProfileIcon";
import Link from "next/link";
import MobileShowBtn from "../ui/MobileShowBtn";

import ModalUserProfile from "../ui/ModalUserProfile";

const HeaderNavBar = () => {
  return (
    <div className="flex h-[93px] items-center justify-between bg-dark-2 px-6 py-8 ">
      <HeaderNavLogo />
      <InputSearchBar />
      <div className="flex items-center space-x-10 max-2sm:hidden">
        <Image className="cursor-pointer" src={ring} alt="ring logo" />
        <Image className="cursor-pointer" src={email} alt="email logo" />
        <Link href={`/dashboard/favourites`}>
          <Image
            className="cursor-pointer"
            src={heartborder}
            alt="heartborder logo"
          />
        </Link>
        <Link
          href={`/dashboard/orders`}
          className="font-tajwal text-[22px] text-white opacity-90"
        >
          Orders
        </Link>
        <div>
          <UserProfileIcon
            custumStylesImage="h-[50px] w-[50px]"
            custumStylesOnline="h-[15px] w-[15px] -translate-y-3 translate-x-8"
            showModal={true}
          />

          <ModalUserProfile />
        </div>
      </div>
      <MobileShowBtn />
    </div>
  );
};

export default HeaderNavBar;
