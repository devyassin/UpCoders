import { zodHandllingErrors } from "@/helpers/ZodHandlingErrors";
import {
  addNewReviewOnUserInterface,
  addReview,
  clearReview,
  clearStatusReview,
} from "@/store/ReviewSlice";
import { ReviewValidation } from "@/lib/validation/ReviewValidation";
import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { FormEvent, useEffect } from "react";

const useAddNewReview = () => {
  const dispatch = useDispatch<any>();
  let review: any = useAppSelector((state) => state.reviews.review);

  const statusAddReview: any = useAppSelector(
    (state) => state.reviews.statusAddReview
  );
  const errorAddReview: any = useAppSelector(
    (state) => state.reviews.errorAddReview
  );
  useEffect(() => {
    if (statusAddReview === "succeeded") {
      Toastsuccess("review added successfully !");
      dispatch(addNewReviewOnUserInterface(review));
      setTimeout(() => {
        dispatch(clearReview());
        dispatch(clearStatusReview());
      }, 1500);
    }

    if (statusAddReview === "failed") {
      Toastfailed(errorAddReview);
    }

    if (statusAddReview === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusAddReview]);
  const addNewReview = (e: FormEvent) => {
    e.preventDefault();

    if (zodHandllingErrors(ReviewValidation, review)) {
      dispatch(addReview(review));
    }
  };
  return { addNewReview, review };
};

export default useAddNewReview;
