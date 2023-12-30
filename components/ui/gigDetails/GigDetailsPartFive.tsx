import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { getAllReviews } from "@/store/ReviewSlice";
import GigDetailsSkeleton from "@/components/skeleton/GigDetailsSkeleton";
import Review from "../Review";
import LoadMore from "../LoadMore";

type Props = {};
let page = 1;
const GigDetailsPartFive = (props: Props) => {
  const dispatch = useDispatch<any>();
  let gig: any = useAppSelector((state) => state.gigs.gig);
  useEffect(() => {
    let gig_id = gig.gig._id;
    dispatch(getAllReviews({ page, gig_id }));
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
              <div className="flex flex-col space-y-80" key={i}>
                <Review review={review} key={i} />
              </div>
            );
          })}

          <LoadMore gig_id={gig.gig._id} />
        </div>
      ) : null}
    </div>
  );
};

export default GigDetailsPartFive;
