"use client";
import FirstBtn from "@/components/btn/FirstBtn";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { clearUser, currentUser, logOut } from "@/store/UserSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const statusLogout = useAppSelector((state) => state.user.statusLogout);
  const { push } = useRouter();
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(currentUser());
  }, []);
  useEffect(() => {
    if (statusLogout === "succeeded") {
      dispatch(clearUser());
      push("/signin");
    }
  }, [statusLogout]);
  return (
    <div className="text-3xl font-bold">
      <div
        onClick={() => {
          dispatch(logOut());
        }}
      >
        <FirstBtn
          customClasses="mt-8 py-2 px-8"
          text={statusLogout === "loading" ? "loading..." : "Logout"}
        />
      </div>
    </div>
  );
}
