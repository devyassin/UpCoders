"use client";
import { deleteFavouriteImg, hearthEmpty, hearthFill } from "@/public/assets";
import {
  addFavourite,
  deleteFavFnc,
  deleteFavourite,
  getAllFavourites,
} from "@/store/favouritesSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { useState } from "react";

type Props = {
  isFavouriteCard?: boolean;
  isFavorite: boolean;
  gig_id: string;
};

const HearthComponent = ({ isFavorite, isFavouriteCard, gig_id }: Props) => {
  const dispatch = useDispatch<any>();
  const user_id: any = useAppSelector((state) => state.user.user._id);
  const [isFavoriteState, setIsFavouriteState] = useState(isFavorite);
  return (
    <>
      {isFavouriteCard ? (
        <Image
          src={deleteFavouriteImg}
          alt="delete favourite"
          className="absolute cursor-pointer hover:scale-110 duration-150 ease-in-out top-2 right-3"
          width={25}
          height={25}
          onClick={async () => {
            await dispatch(deleteFavourite(gig_id));
            dispatch(deleteFavFnc(gig_id));
          }}
        />
      ) : isFavoriteState ? (
        <Image
          src={hearthFill}
          alt="hearth fill"
          className="absolute cursor-pointer hover:scale-110 duration-150 ease-in-out top-4 right-4"
          width={20}
          height={20}
          onClick={async () => {
            await dispatch(deleteFavourite(gig_id));
            setIsFavouriteState(false);
          }}
        />
      ) : (
        <Image
          src={hearthEmpty}
          alt="hearth empty"
          className="absolute cursor-pointer hover:scale-110 duration-150 ease-in-out top-4 right-4"
          width={20}
          height={20}
          onClick={async () => {
            const favourite = { gig_id, user_id };
            await dispatch(addFavourite(favourite));
            setIsFavouriteState(true);
          }}
        />
      )}
    </>
  );
};

export default HearthComponent;
