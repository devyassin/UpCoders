"use client";
import { arrowLeft, arrowRight } from "@/public/assets";
import Image from "next/image";
import { useState } from "react";
import { Categorys } from "@/constants/domaineExpertisme";

const ScrollBarCategories = () => {
  const [visibilityLeft, setVisibilityLeft] = useState(false);
  const [visibilityRight, setvisibilityRight] = useState(true);
  const slideLeft = () => {
    let slider = document.getElementById("slider") as HTMLElement;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    slider.scrollLeft = slider.scrollLeft - 200;
    if (slider.scrollLeft === 0) {
      setVisibilityLeft(false);
    }
    if (slider.scrollLeft <= maxScroll) {
      setvisibilityRight(true);
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider") as HTMLElement;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    slider.scrollLeft = slider.scrollLeft + 200;
    if (slider.scrollLeft === 0) {
      setVisibilityLeft(true);
    }
    if (slider.scrollLeft === maxScroll) {
      setvisibilityRight(false);
    }
  };
  return (
    <div className="flex items-center ">
      <div onClick={slideLeft} className={`${visibilityLeft ? "" : "hidden"}`}>
        <Image src={arrowLeft} className={`cursor-pointer`} alt="arrow left" />
      </div>

      <div
        id="slider"
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

      <div onClick={slideRight} className={`${visibilityRight ? "" : "hidden"}`}>
        <Image src={arrowRight} className="cursor-pointer" alt="arrow right" />
      </div>
    </div>
  );
};

export default ScrollBarCategories;
