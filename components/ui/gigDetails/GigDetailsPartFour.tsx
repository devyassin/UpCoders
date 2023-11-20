import GreenBtn from "@/components/btn/GreenBtn";
import InputReviews from "@/components/form/Reviews/InputReviews";
import useAddNewReview from "@/hooks/useAddNewReview";
import TitleSec from "../titles/TitleSec";

type Props = {};

const GigDetailsPartFour = (props: Props) => {
  const { addNewReview, review } = useAddNewReview();

  return (
    <div className="py-10">
      {" "}
      <TitleSec
        title="Reviews"
        classStyles="text-light-white-2 py-10 max-lg:text-[28px]"
      />
      <form onSubmit={addNewReview} className="flex flex-col space-y-6">
        <InputReviews
          value={review.comment}
          name="comment"
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
