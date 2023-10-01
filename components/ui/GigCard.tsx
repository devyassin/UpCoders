import { etoile, hearthEmpty, deleteFavourite } from "@/public/assets";
import Image from "next/image";
import React from "react";

type Props = {
  gig: any;
  isFavourite?: boolean;
};
const GigCard = ({ gig, isFavourite }: Props) => {
  const { title, category, rating, price, user_id, picture } = gig;

  return (
    <div className="bg-blue-dark-4 rounded-[20px] border border-white pb-4 hover:cursor-pointer hover:opacity-80 duration-150 ease-in-out">
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
        {isFavourite ? (
          <Image
            src={deleteFavourite}
            alt="delete favourite"
            className="absolute cursor-pointer hover:scale-110 duration-150 ease-in-out top-2 right-3 "
            width={25}
            height={25}
          />
        ) : (
          <Image
            src={hearthEmpty}
            alt="hearth empty"
            className="absolute cursor-pointer hover:scale-110 duration-150 ease-in-out top-4 right-4 "
            width={20}
            height={20}
          />
        )}
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
        <div className="flex px-3 font-tajwal pt-2 space-x-1 items-center">
          <Image
            className="h-[17px] w-[18px]"
            src={etoile}
            alt="etoile"
            width={200}
            height={200}
          />
          <p className="text-[16px] text-shadow-green">{rating}.0</p>
          <p className="text-[16px] text-darkentwo">(0)</p>
        </div>

        {/* gig price */}
        <h1 className="text-[17px] text-light-green font-bold tracking-wide font-tajwal pt-4 px-3">
          <span>From </span>
          {user_id.country}${price}
        </h1>
      </div>
    </div>
  );
};

export default GigCard;
