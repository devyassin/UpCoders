"use client";
import FirstBtn from "@/components/btn/FirstBtn";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { clearStatus, clearUser, currentUser, logOut } from "@/store/UserSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const statusLogout = useAppSelector((state) => state.user.statusLogout);
  // const statusAuth = useAppSelector((state) => state.user.statusCurrentUser);
  const router = useRouter();
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(currentUser());
  }, []);
  useEffect(() => {
    // if (statusAuth === "failed") {
    //   router.push("/welcome");
    // }
    if (statusLogout === "succeeded") {
      dispatch(clearUser());
      dispatch(clearStatus());
      router.push("/welcome");
    }
  }, [statusLogout]);

  // if (statusAuth === "succeeded")
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
