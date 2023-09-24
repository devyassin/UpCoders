"use client";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { logout } from "@/public/assets";
import useLogout from "@/hooks/useLogout";

export default function LogoutBtn() {
  const dispatch = useDispatch<any>();
  const { logOut } = useLogout();
  return (
    <button
      onClick={() => {
        dispatch(logOut());
      }}
      className={`text-2xl 
      } h-[62px] pl-4 rounded-xl flex items-center space-x-6 font-tajwal hover:opacity-60 hover:duration-300`}
    >
      <Image src={logout} alt="logout btn" />
      <h1 className="text-xl text-white max-xl:hidden">Logout</h1>
    </button>
  );
}
