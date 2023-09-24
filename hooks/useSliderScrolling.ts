import { useState, useRef } from "react";
const useSliderScrolling = () => {
  const [visibilityLeft, setVisibilityLeft] = useState(false);
  const [visibilityRight, setVisibilityRight] = useState(true);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleSlide = (direction: "left" | "right", distance: number) => {
    let slider = sliderRef.current!;

    if (slider) {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (direction === "left") {
        slider.scrollLeft -= distance;
      } else if (direction === "right") {
        slider.scrollLeft += distance;
      }
      console.log(slider.scrollLeft);
      setVisibilityLeft(slider.scrollLeft > 0);
      setVisibilityRight(slider.scrollLeft < maxScroll);
    }
  };
  return { visibilityLeft, visibilityRight, sliderRef, handleSlide };
};

export default useSliderScrolling;
