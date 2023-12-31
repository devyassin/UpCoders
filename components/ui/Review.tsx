import { fetchCountryFlagByName } from "@/helpers/GetContry";
import { likes } from "@/public/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StartsRating from "./StartsRating";

type Props = {
  review: any;
};

const Review = ({ review }: Props) => {
  const [countryFlag, setCountryFlag] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryName = review.user_id.country;
        const flag = await fetchCountryFlagByName(countryName);
        setCountryFlag(flag);
        console.log(flag);
      } catch (error) {
        console.error("Error fetching country flag:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col  py-2 ">
      {" "}
      <div className="flex items-center space-x-2 pb-3">
        <Image
          className="rounded-full object-cover object-center  h-[40px] w-[40px] "
          src={review.user_id.picture.fileUrl}
          alt={review.user_id.picture.fileKey}
          width={40}
          height={40}
          quality={100}
        />
        <div className="flex flex-col">
          <p className="font-tajwal text-[14px] text-light-white-2">
            {`${review.user_id.firstName}`}
          </p>
          <div className="flex space-x-4">
            <Image
              className="rounded-sm object-cover object-center  h-[10px] w-[13.333px] "
              src={countryFlag}
              alt={countryFlag}
              width={40}
              height={40}
              quality={100}
            />
            <p className="font-tajwal text-[8px] text-[#B7B797]">
              {review.user_id.country}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <StartsRating />
        <p className="font-tajwal text-[12px] text-shadow-green font-bold pr-4">
          5.0
        </p>
        <div className="bg-darken h-4  w-[1px]" />
        <p className="font-tajwal text-[10px]  font-bold pr-4 text-[#B7B797] opacity-70 pl-4">
          1 month ago
        </p>
      </div>
      <div className="font-tajwal text-light-white text-[14px] pt-4">
        {review.comment}
      </div>
      <div className="flex pt-4 space-x-2 items-end">
        <Image
          className=" h-[18px] w-[26px] "
          src={likes}
          alt={`likes ${review._id}`}
          width={40}
          height={40}
          quality={100}
        />
        <p className="text-[14px] text-darkentwo">
          ({review.numberOfLikes ? review.numberOfLikes : 0})
        </p>
      </div>
      <hr className="mt-4 text-[#C49494] opacity-40 pb-10" />
    </div>
  );
};

export default Review;
