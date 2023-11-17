import GreenBtn from "@/components/btn/GreenBtn";
import InputReviews from "@/components/form/Reviews/InputReviews";
import React, { FormEvent } from "react";
import TitleSec from "../titles/TitleSec";

type Props = {};

const GigDetailsPartFour = (props: Props) => {
  const addNewReview = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="py-10">
      {" "}
      <TitleSec
        title="Reviews"
        classStyles="text-light-white-2 py-10 max-lg:text-[28px]"
      />
      <form onSubmit={addNewReview} className="flex flex-col space-y-6">
        <InputReviews
          name="reviewDesc"
          placeholder="Comment..."
          customClasses="w-full h-[106px] "
        />
        <GreenBtn
          text="Add review"
          customClasses="py-2 self-end text-[15px] max-lg:text-[14px] px-8 max-md:w-full font-semibold "
        />
      </form>
    </div>
  );
};

export default GigDetailsPartFour;
