"use client";
import { gigCardsSkeleton } from "@/constants/helpers";
import { useAppSelector } from "@/store/store";
import GigCardSkeleton from "../skeleton/GigCardSkeleton";

import GigCard from "../ui/GigCard";
import GridWrapper from "../ui/GridWrapper";
const Home = () => {
  const gigs: any = useAppSelector((state) => state.gigs.data);
  const statusGetAllGigs: any = useAppSelector(
    (state) => state.gigs.statusGetAllGigs
  );
  console.log(gigs);
  return (
    <GridWrapper>
      {statusGetAllGigs === "loading" || statusGetAllGigs === ""
        ? gigCardsSkeleton.map((_, i) => <GigCardSkeleton key={i} />)
        : statusGetAllGigs === "succeeded"
        ? gigs.gigs.map((gig: any) => <GigCard key={gig._id} gig={gig} />)
        : null}
    </GridWrapper>
  );
};

export default Home;
