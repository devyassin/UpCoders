"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { getOneGig } from "@/store/gigSlice";
import GigDetailsPartOne from "@/components/ui/gigDetails/GigDetailsPartOne";
import GigDetailsSkeleton from "@/components/skeleton/GigDetailsSkeleton";
import GigDetailsPartTwo from "@/components/ui/gigDetails/GigDetailsPartTwo";
import GigDetailsPartThree from "@/components/ui/gigDetails/GigDetailsPartThree";

type Props = {
  params: { id: string };
};
const page = ({ params: { id } }: Props) => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getOneGig(id));
  }, []);
  const gig: any = useAppSelector((state) => state.gigs.gig);
  const statusGetOneGig: any = useAppSelector(
    (state) => state.gigs.statusGetOneGig
  );
  return (
    <div>
      {statusGetOneGig === "loading" || statusGetOneGig === "" ? (
        <div>
          <GigDetailsSkeleton />
        </div>
      ) : statusGetOneGig === "succeeded" ? (
        <div className="grid grid-cols-2 mx-6 gap-x-20 pt-10">
          {" "}
          <div className="flex flex-col">
            <GigDetailsPartOne gig={gig.gig} />
          </div>
          <div>
            <GigDetailsPartTwo gig={gig.gig} />
          </div>
          <div>
            <GigDetailsPartThree gig={gig.gig} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default page;
