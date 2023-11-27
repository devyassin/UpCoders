import { fetchCountryFlagByName } from "@/helpers/GetContry";
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
      } catch (error) {
        console.error("Error fetching country flag:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col  py-2 ">
      {" "}
      <div className="flex items-center space-x-2 pb-6">
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
      <StartsRating />
    </div>
  );
};

export default Review;
