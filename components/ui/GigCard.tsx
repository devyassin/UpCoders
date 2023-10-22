import { etoile } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EtoileRating from "./EtoileRating";
import HearthComponent from "./HearthComponent";

type Props = {
  gig: any;
  isFavouriteCard?: boolean;
};
const GigCard = ({ gig, isFavouriteCard }: Props) => {
  const { title, category, rating, price, user_id, picture, isFavorite, _id } =
    gig;

  return (
    <Link
      href={`home/${gig._id}`}
      className="bg-blue-dark-4 rounded-[20px] border border-white pb-4 hover:cursor-pointer hover:opacity-80 duration-150 ease-in-out"
    >
      {/* container 1 */}
      <div className="relative">
        {/* image */}
        <Image
          src={picture.fileUrl}
          alt={picture.fileKey}
          className="h-[20vh] w-full rounded-t-[20px] border-b border-white"
          width={1000}
          height={1000}
          quality={100}
        />
        <HearthComponent
          isFavorite={isFavorite}
          isFavouriteCard={isFavouriteCard}
          gig_id={_id}
        />
      </div>
      {/* container 2 */}
      <div>
        <div className="flex justify-between pt-4 px-3 items-center">
          {/* gig owner icon profile */}
          <div className="flex items-center space-x-2">
            <Image
              className="rounded-full border border-white h-[25px] w-[25px]"
              src={user_id.picture.fileUrl}
              alt={user_id.picture.fileKey}
              width={200}
              height={200}
            />
            <p className="font-tajwal text-[12px]">{user_id.firstName}</p>
          </div>
          {/* gig category */}
          <h3 className="text-[14px] text-shadow-green">{category}</h3>
        </div>
        {/*  */}
        <div className="font-tajwal text-[16px] pt-4 px-3 tracking-wide leading-6">
          {title}
        </div>
        {/* gig rating */}
        <EtoileRating rating={rating} numberOfRaters={0} />

        {/* gig price */}
        <h1 className="text-[17px] text-light-green font-bold tracking-wide font-tajwal pt-4 px-3">
          <span>From </span>
          {user_id.country}${price}
        </h1>
      </div>
    </Link>
  );
};

export default GigCard;
