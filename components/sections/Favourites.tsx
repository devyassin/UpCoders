"use client";
import { gigCardsSkeleton } from "@/constants/helpers";
import { useAppSelector } from "@/store/store";
import GigCardSkeleton from "../skeleton/GigCardSkeleton";

import GigCard from "../ui/GigCard";
import GridWrapper from "../ui/GridWrapper";

const Favourites = () => {
  const favourites: any = useAppSelector((state) => state.favourites.data);
  const statusGetAllFavourites: any = useAppSelector(
    (state) => state.favourites.statusGetAllFavourites
  );

  return (
    <GridWrapper>
      {statusGetAllFavourites === "loading" || statusGetAllFavourites === ""
        ? gigCardsSkeleton.map((_, i) => <GigCardSkeleton key={i} />)
        : statusGetAllFavourites === "succeeded"
        ? favourites.favourites.map((gig: any) => (
            <GigCard key={gig.gig_id._id} gig={gig.gig_id} isFavourite={true} />
          ))
        : null}
    </GridWrapper>
  );
};

export default Favourites;
