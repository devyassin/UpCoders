"use client";
import FirstBtn from "@/components/btn/FirstBtn";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { logOut } from "@/store/UserSlice";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const dispatch = useDispatch<any>();
  return (
    <div
      onClick={() => {
        dispatch(logOut());
        push("/signin");
      }}
      className="text-3xl font-bold"
    >
      <div>
        <FirstBtn customClasses="mt-8 py-2 px-8" text="Logout" />
      </div>
    </div>
  );
}
