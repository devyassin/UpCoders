import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { getAllReviews } from "@/store/ReviewSlice";
import GigDetailsSkeleton from "@/components/skeleton/GigDetailsSkeleton";
import Review from "../Review";


type Props = {};

const GigDetailsPartFive = (props: Props) => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getAllReviews());
  }, []);
  let reviews: any = useAppSelector((state) => state.reviews.data);
  const statusGetAllReviews: any = useAppSelector(
    (state) => state.reviews.statusGetAllReviews
  );

  return (
    <div>
      {statusGetAllReviews === "loading" || statusGetAllReviews === "" ? (
        <div>
          <GigDetailsSkeleton />
        </div>
      ) : statusGetAllReviews === "succeeded" ? (
        <div>
          {reviews.reviews.map((review: any, i: number) => {
            return (
              <div className="flex flex-col space-y-80">
                <Review review={review} key={i} />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default GigDetailsPartFive;
