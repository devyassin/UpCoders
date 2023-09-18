"use client";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { clearStatus, clearUser, logOut } from "@/store/UserSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { logout } from "@/public/assets";
import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";

export default function LogoutBtn() {
  const statusLogout = useAppSelector((state) => state.user.statusLogout);
  const errorLogout = useAppSelector((state) => state.user.errorLogOut);

  const router = useRouter();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (statusLogout === "failed") {
      Toastfailed(errorLogout);
    }

    if (statusLogout === "loading") {
      ToastLoading("processing .....");
    }
    if (statusLogout === "succeeded") {
      Toastsuccess("See u next time !");
      dispatch(clearUser());
      dispatch(clearStatus());
      router.push("/welcome");
    }
  }, [statusLogout]);

  return (
    <button
      onClick={() => {
        dispatch(logOut());
      }}
      className={`text-2xl 
      } h-[62px] pl-4 rounded-xl flex items-center space-x-6 font-tajwal hover:opacity-60 hover:duration-300`}
    >
      <Image src={logout} alt="logout btn" />
      <h1 className="text-xl text-white ">Logout</h1>
    </button>
  );
}
