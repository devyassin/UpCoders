"use client";
import { arrowLeft, arrowRight } from "@/public/assets";
import ArrowScrolling from "./ArrowScrolling";
import useSliderScrolling from "@/hooks/useSliderScrolling";
import CategoriesMapping from "./CategoriesMapping";

const ScrollBarCategories = () => {
  const { visibilityLeft, visibilityRight, sliderRef, handleSlide } =
    useSliderScrolling();
  return (
    <div className="flex items-center ">
      <ArrowScrolling
        direction="left"
        imageSrc={arrowLeft}
        isVisible={visibilityLeft}
        scrollFunction={() => handleSlide("left", 200)}
      />

      <CategoriesMapping sliderRef={sliderRef} />

      <ArrowScrolling
        direction="right"
        imageSrc={arrowRight}
        isVisible={visibilityRight}
        scrollFunction={() => handleSlide("right", 200)}
      />
    </div>
  );
};

export default ScrollBarCategories;
