import { GigValidation } from "@/lib/validation/GigValidation";
import {
  addGig,
  clearGig,
  clearStatusGig,
  handleGigForm,
} from "@/store/gigSlice";

import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { zodHandllingErrors } from "@/helpers/ZodHandlingErrors";
import { FormEvent, useEffect } from "react";

const useAddNewGig = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const gig: any = useAppSelector((state) => state.gigs.gig);
  const statusAddGig: any = useAppSelector((state) => state.gigs.statusAddGig);
  const errorAddGig: any = useAppSelector((state) => state.gigs.errorAddGig);
  const user = useAppSelector((state) => state.user.user);
  useEffect(() => {
    if (statusAddGig === "succeeded") {
      Toastsuccess("gig added successfully !");

      setTimeout(() => {
        router.push("/dashboard/home");
        dispatch(clearGig());
        dispatch(clearStatusGig());
      }, 1500);
    }

    if (statusAddGig === "failed") {
      Toastfailed(errorAddGig);
    }

    if (statusAddGig === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusAddGig]);
  const addNewGig = (e: FormEvent) => {
    e.preventDefault();
    let name = "user_id";
    let value = user._id;
    dispatch(handleGigForm({ name, value }));
    if (zodHandllingErrors(GigValidation, gig)) {
      dispatch(addGig(gig));
    }
  };
  return { addNewGig };
};
export default useAddNewGig;
