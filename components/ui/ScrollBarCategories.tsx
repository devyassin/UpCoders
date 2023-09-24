"use client";
import { arrowLeft, arrowRight } from "@/public/assets";
import { Categorys } from "@/constants/domaineExpertisme";
import ArrowScrolling from "./ArrowScrolling";
import useSliderScrolling from "@/hooks/useSliderScrolling";

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

      <div
        ref={sliderRef}
        className="w-[75vw] max-xl:w-[85vw] space-x-14 max-sm:text-[12px] text-[16px] max-sm:w-[100vw]  font-tapestry scrollbar-hide  h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
      >
        {Categorys.map((category, i) => {
          return (
            <h2 className="inline-block px-4 pb-2 text-[#CAD7E9]" key={i}>
              {category}
            </h2>
          );
        })}
      </div>

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
