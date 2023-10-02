"use client";
import { gigCardsSkeleton } from "@/constants/helpers";
import { useAppSelector } from "@/store/store";
import GigCardSkeleton from "../skeleton/GigCardSkeleton";
import { useEffect } from "react";
import GigCard from "../ui/GigCard";
import GridWrapper from "../ui/GridWrapper";
import { getAllFavourites } from "@/store/favouritesSlice";
import { useDispatch } from "react-redux";

const Favourites = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getAllFavourites());
  }, [dispatch]);
  const favourites: any = useAppSelector((state) => state.favourites.data);
  const statusGetAllFavourites: any = useAppSelector(
    (state) => state.favourites.statusGetAllFavourites
  );
  console.log(favourites);
  return (
    <GridWrapper>
      {statusGetAllFavourites === "loading" || statusGetAllFavourites === ""
        ? gigCardsSkeleton.map((_, i) => <GigCardSkeleton key={i} />)
        : statusGetAllFavourites === "succeeded"
        ? favourites.favourites.map((gig: any) => (
            <GigCard
              key={gig.gig_id._id}
              gig={gig.gig_id}
              isFavouriteCard={true}
            />
          ))
        : null}
    </GridWrapper>
  );
};

export default Favourites;
