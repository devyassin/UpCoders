import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { currentUser, setIsCompleted, updateUser } from "@/store/UserSlice";
import { zodHandllingErrors } from "@/helpers/ZodHandlingErrors";
import { UserValidationCompleteProfile } from "@/lib/validation/UserValidation";
import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";

const useCompleteProfile = () => {
  const dispatch = useDispatch<any>();
  const router = useRouter();
  useEffect(() => {
    if (statusUpdateUser === "succeeded" || statusUpdateUser === "loading")
      return;
    dispatch(currentUser());
    dispatch(setIsCompleted());
  }, []);

  const user = useAppSelector((state) => state.user.user);
  const activePart = useAppSelector(
    (state) => state.completeProfile.activePart
  );
  const statusUpdateUser = useAppSelector(
    (state) => state.user.statusUpdateUser
  );
  const errorUpdateUser = useAppSelector((state) => state.user.errorUpdateUser);

  useEffect(() => {
    if (statusUpdateUser === "succeeded") {
      Toastsuccess("Profile Complited !");
      router.push("/");
    }

    if (statusUpdateUser === "failed") {
      Toastfailed(errorUpdateUser);
    }

    if (statusUpdateUser === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusUpdateUser]);
  const completeProfile = (e: FormEvent) => {
    e.preventDefault();
    if (zodHandllingErrors(UserValidationCompleteProfile, user)) {
      dispatch(updateUser(user));
    }
  };

  return { completeProfile, activePart };
};

export default useCompleteProfile;
