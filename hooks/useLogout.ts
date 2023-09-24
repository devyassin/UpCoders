import { useEffect } from "react";
import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { clearStatus, clearUser, logOut } from "@/store/UserSlice";
import { useRouter } from "next/navigation";

const useLogout = () => {
  const statusLogout = useAppSelector((state) => state.user.statusLogout);
  const errorLogout = useAppSelector((state) => state.user.errorLogOut);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (statusLogout === "failed") {
      Toastfailed(errorLogout);
    }

    if (statusLogout === "loading") {
      ToastLoading("processing .....");
    }
    if (statusLogout === "succeeded") {
      Toastsuccess("See you next time !");
      dispatch(clearUser());
      dispatch(clearStatus());
      router.push("/welcome");
    }
  }, [statusLogout]);
  return { logOut };
};

export default useLogout;
