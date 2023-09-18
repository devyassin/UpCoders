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
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        className="circle-image relative h-[50px] w-[50px]  rounded-full object-cover object-center opacity-0 transition-opacity duration-[2s]"
      />
      <div className="absolute h-[15px] w-[15px] -translate-y-3 translate-x-8 rounded-full border-[1px] border-white bg-[#1DBF73]"></div>
    </div>
  );
};

export default UserProfileIcon;
