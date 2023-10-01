"use client";
import { gigCardsSkeleton } from "@/constants/helpers";
import { useAppSelector } from "@/store/store";
import GigCardSkeleton from "../skeleton/GigCardSkeleton";

import GigCard from "../ui/GigCard";
const Home = () => {
  const gigs: any = useAppSelector((state) => state.gigs.data);
  const statusGetAllGigs: any = useAppSelector(
    (state) => state.gigs.statusGetAllGigs
  );

  return (
    <div className="text-white text-5xl grid grid-cols-3 max-lg:grid-cols-2 max-lg:mx-16 max-sm:grid-cols-1 max-sm:mx-16 gap-16 mt-8 mx-10">
      {statusGetAllGigs === "loading" || statusGetAllGigs === ""
        ? gigCardsSkeleton.map((_, i) => <GigCardSkeleton key={i} />)
        : statusGetAllGigs === "succeeded"
        ? gigs.gigs.map((gig: any) => <GigCard key={gig._id} gig={gig} />)
        : null}
    </div>
  );
};

export default Home;
