"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { currentUser } from "@/store/UserSlice";
import Image from "next/image";

const UserProfileIcon = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(currentUser());
  }, []);
  const user = useAppSelector((state) => state.user.user);
  console.log(user);
  return (
    <div>
      <Image
        src={user?.picture?.fileUrl}
        alt="user profile image"
        width={50}
        height={50}
        className="rounded-full relative h-[50px] w-[50px]  object-cover object-center circle-image"
      />
      <div className="absolute w-[15px] h-[15px] rounded-full bg-[#1DBF73] -translate-y-3 translate-x-8 border-white border-[1px]"></div>
    </div>
  );
};

export default UserProfileIcon;
