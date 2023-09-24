import Image, { StaticImageData } from "next/image";

type Props = {
  direction: "left" | "right";
  scrollFunction: () => void;
  isVisible: boolean;
  imageSrc: StaticImageData;
};

const ArrowScrolling = ({
  direction,
  scrollFunction,
  isVisible,
  imageSrc,
}: Props) => {
  return (
    <div onClick={scrollFunction} className={`${isVisible ? "" : "hidden"}`}>
      <Image
        src={imageSrc}
        className={`cursor-pointer`}
        alt={`arrow ${direction}`}
      />
    </div>
  );
};

export default ArrowScrolling;
