"use client";

import { useAppSelector } from "@/store/store";

import Image from "next/image";

type Props = {
  custumStylesImage: string;
  custumStylesOnline: string;
};

const UserProfileIcon = ({ custumStylesImage, custumStylesOnline }: Props) => {
  const user = useAppSelector((state) => state.user.user);
  console.log(user);
  return (
    <div className="relative hover:opacity-80 hover:duration-150">
      <Image
        src={user?.picture?.fileUrl}
        alt="user profile image"
        width={50}
        height={50}
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        className={`circle-image relative ${custumStylesImage}  cursor-pointer  
        rounded-full object-cover object-center opacity-0 
         transition-opacity duration-[2s]`}
      />
      <div className={`absolute ${custumStylesOnline} h-[15px] w-[15px] -translate-y-3 translate-x-8 rounded-full border-[1px] border-white bg-[#1DBF73]`}></div>
    </div>
  );
};

export default UserProfileIcon;
