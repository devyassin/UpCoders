"use client";

import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { showProfileModal } from "@/store/modalSlice";

import Image from "next/image";
import { useEffect } from "react";
import UserProfileIconSkeleton from "../skeleton/UserProfileIconSkeleton";

type Props = {
  width: number;
  height: number;
  custumStylesImage: string;
  custumStylesOnline: string;
  showModal?: boolean;
};

const UserProfileIcon = ({
  showModal,
  width,
  height,
  custumStylesImage,
  custumStylesOnline,
}: Props) => {
  const dispatch = useDispatch<any>();
  const user = useAppSelector((state) => state.user.user);
  const userLoadingStatus = useAppSelector(
    (state) => state.user.statusCurrentUser,
  );

  useEffect(() => {}, [userLoadingStatus]);

  if (userLoadingStatus === "loading" || userLoadingStatus === "") {
    return <UserProfileIconSkeleton />;
  }
  return (
    <div
      onClick={() => showModal && dispatch(showProfileModal())}
      className={`relative ${
        showModal && "hover:opacity-80 hover:duration-150"
      }`}
    >
      <Image
        src={user?.picture?.fileUrl}
        alt="user profile image"
        width={width}
        height={height}
        className={`circle-image relative ${custumStylesImage}  duration-[2s]  
        cursor-pointer rounded-full object-cover object-center 
         `}
      />
      <div
        className={`absolute ${custumStylesOnline} h-[15px] w-[15px] -translate-y-3 translate-x-8 cursor-pointer rounded-full border-[1px] border-white bg-[#1DBF73]`}
      ></div>
    </div>
  );
};

export default UserProfileIcon;
