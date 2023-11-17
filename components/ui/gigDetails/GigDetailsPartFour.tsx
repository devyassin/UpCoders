import GreenBtn from "@/components/btn/GreenBtn";
import InputReviews from "@/components/form/Reviews/InputReviews";
import React, { FormEvent, useEffect } from "react";
import TitleSec from "../titles/TitleSec";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { zodHandllingErrors } from "@/helpers/ZodHandlingErrors";
import {
  addReview,
  handleReviewForm,
  clearReview,
  clearStatusReview,
} from "@/store/ReviewSlice";
import { ReviewValidation } from "@/lib/validation/ReviewValidation";
import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";

type Props = {};

const GigDetailsPartFour = (props: Props) => {
  const dispatch = useDispatch<any>();
  const review: any = useAppSelector((state) => state.reviews.review);
  const gig: any = useAppSelector((state) => state.gigs.gig);
  const statusAddReview: any = useAppSelector(
    (state) => state.reviews.statusAddReview
  );
  const errorAddReview: any = useAppSelector(
    (state) => state.reviews.errorAddReview
  );
  const user = useAppSelector((state) => state.user.user);
  useEffect(() => {
    if (statusAddReview === "succeeded") {
      Toastsuccess("review added successfully !");

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
    let name = "user_id";
    let value = user._id;
    dispatch(handleReviewForm({ name, value }));
    name = "gig_id";
    value = gig.gig._id;
    dispatch(handleReviewForm({ name, value }));
    console.log(review);
    if (zodHandllingErrors(ReviewValidation, review)) {
      dispatch(addReview(review));
    }
  };
  return (
    <div className="py-10">
      {" "}
      <TitleSec
        title="Reviews"
        classStyles="text-light-white-2 py-10 max-lg:text-[28px]"
      />
      <form onSubmit={addNewReview} className="flex flex-col space-y-6">
        <InputReviews
          value={review.comment}
          name="comment"
          placeholder="Comment..."
          customClasses="w-full h-[106px] "
        />
        <GreenBtn
          text="Add review"
          customClasses="py-2 self-end text-[15px] max-lg:text-[14px] px-8 max-md:w-full font-semibold "
        />
      </form>
    </div>
  );
};

export default GigDetailsPartFour;
