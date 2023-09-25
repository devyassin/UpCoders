import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";
import { UserValidation } from "@/lib/validation/UserValidation";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { zodHandllingErrors } from "@/helpers/ZodHandlingErrors";
import { User } from "@/types";
import { FormEvent, useEffect } from "react";
import { addUser, clearStatus, clearUser, setType } from "@/store/UserSlice";

const useSignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const currentTypeSelected = useAppSelector((state) => state.welcome.type);
  const user: User = useAppSelector((state) => state.user.user);
  const error = useAppSelector((state) => state.user.error);
  const statusAddUser = useAppSelector((state) => state.user.statusAddUser);

  const signUp = (e: FormEvent) => {
    e.preventDefault();

    if (zodHandllingErrors(UserValidation, user)) {
      dispatch(addUser(user));
    }
  };

  useEffect(() => {
    dispatch(setType({ currentTypeSelected }));
    if (statusAddUser === "succeeded") {
      Toastsuccess("User Added !");
      dispatch(clearUser());
      dispatch(clearStatus());
      router.push("/signin");
    }

    if (statusAddUser === "failed") {
      Toastfailed(error);
    }

    if (statusAddUser === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusAddUser]);

  return {
    signUp,
    currentTypeSelected,
    user,
  };
};

export default useSignUp;
