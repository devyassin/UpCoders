"use client";
import Image from "next/image";
import { ring } from "@/public/assets";
import { useDispatch } from "react-redux";
import { showNotificationsModal } from "@/store/modalSlice";

const NotificationsShowBtn = () => {
  const dispatch = useDispatch();
  return (
    <Image
      onClick={() => dispatch(showNotificationsModal())}
      className="cursor-pointer"
      src={ring}
      alt="ring logo"
    />
  );
};

export default NotificationsShowBtn;
