import { FormEvent, useEffect } from "react";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { User } from "@/types";
import { zodHandllingErrors } from "@/helpers/ZodHandlingErrors";
import { UserValidationSignIn } from "@/lib/validation/UserValidation";
import { clearStatus, clearUser, signIn } from "@/store/UserSlice";
import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";
import { useRouter } from "next/navigation";

const useSignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const currentTypeSelected = useAppSelector((state) => state.welcome.type);
  const user: User = useAppSelector((state) => state.user.user);
  const errorSignIn = useAppSelector((state) => state.user.errorSignIn);
  const statusSignIn = useAppSelector((state) => state.user.statusSignIn);
  const signInFc = (e: FormEvent) => {
    e.preventDefault();
    if (zodHandllingErrors(UserValidationSignIn, user)) {
      dispatch(signIn({ email: user.email, password: user.password }));
    }
  };

  useEffect(() => {
    if (statusSignIn === "succeeded") {
      Toastsuccess("Welcome !");

      router.push("/dashboard/home");
      setTimeout(() => {
        dispatch(clearUser());
        dispatch(clearStatus());
      }, 1500);
    }

    if (statusSignIn === "failed") {
      Toastfailed(errorSignIn);
    }

    if (statusSignIn === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusSignIn]);
  return { currentTypeSelected, signInFc, user };
};

export default useSignIn;
