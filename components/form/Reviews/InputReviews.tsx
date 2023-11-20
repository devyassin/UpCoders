import { handleReviewForm, setUserIdAndGigId } from "@/store/ReviewSlice";
import { useAppSelector } from "@/store/store";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
type Props = {
  customClasses?: string;
  name: string;
  placeholder?: string;
  value?: string;
  container?: string;
};

const InputReviews = ({
  customClasses,
  placeholder,
  name,
  value,
  container,
}: Props) => {
  const dispatch = useDispatch();
  const gig: any = useAppSelector((state) => state.gigs.gig);
  const user = useAppSelector((state) => state.user.user);
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let { name, value }: any = event.target;
    dispatch(setUserIdAndGigId({ gig_id: gig.gig._id, user_id: user._id }));
    dispatch(handleReviewForm({ name, value }));
  };
  return (
    <div className={`${container}`}>
      <textarea
        onChange={handleChange}
        value={value}
        rows={10}
        name={name}
        className={`input-form focus:bg-dark-6 outline-none  font-tajwal h-[61px] w-[273px] scrollbar-hide px-[28px] pt-[25px] pb-[19px] text-white ${customClasses}`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default InputReviews;
