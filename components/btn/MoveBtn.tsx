import { leftArrow, rightArrow } from "@/public/assets";
import { moveToback, moveToNext } from "@/store/CompleteProfileSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

type Props = {
  direction: "left" | "right";
  activePart: string;
};

const MoveBtn = ({ direction, activePart }: Props) => {
  const dispatch = useDispatch<any>();
  const handleClick = () => {
    if (direction === "left") {
      dispatch(moveToback());
    } else if (direction === "right") {
      dispatch(moveToNext());
    }
  };

  const isHidden =
    (activePart === "one" && direction === "left") ||
    (activePart === "three" && direction === "right");
  return (
    <Image
      onClick={handleClick}
      className={`cursor-pointer ${
        direction === "left" ? "-translate-x-8" : "translate-x-8"
      } hover:opacity-80 duration-150 ${isHidden ? "hidden" : ""}`}
      src={direction === "left" ? leftArrow : rightArrow}
      height={25}
      width={25}
      alt={`${direction} arrow`}
    />
  );
};

export default MoveBtn;
