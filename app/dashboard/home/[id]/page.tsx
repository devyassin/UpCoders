"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { getOneGig } from "@/store/gigSlice";
import GigDetailsPartOne from "@/components/ui/gigDetails/GigDetailsPartOne";

type Props = {
  params: { id: string };
};
const page = ({ params: { id } }: Props) => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getOneGig(id));
  }, []);
  const gig = useAppSelector((state) => state.gigs.gig.gig);
  const statusGetOneGig: any = useAppSelector(
    (state) => state.gigs.statusGetOneGig
  );
  return (
    <div>
      {statusGetOneGig === "loading" || statusGetOneGig === "" ? (
        <div>Loading ....</div>
      ) : statusGetOneGig === "succeeded" ? (
        <div className="grid grid-cols-2 mx-6  pt-10">
          {" "}
          <div className="flex flex-col">
            <GigDetailsPartOne gig={gig} />
          </div>
          <div></div>
        </div>
      ) : null}
    </div>
  );
};

export default page;
