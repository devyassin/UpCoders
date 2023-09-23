"use client";
import { arrowLeft, arrowRight } from "@/public/assets";
import Image from "next/image";
import { useState } from "react";
import { Categorys } from "@/constants/domaineExpertisme";

const ScrollBarCategories = () => {
  const [scrollX, setScrollX] = useState(0); // Initialize the scroll position
  const [visibilityLeftArrow, setVisibilityLeftArrow] = useState(false);
  const [visibilityRightArrow, setVisibilityRightArrow] = useState(true);
  const categoryWidth = 200; // Adjust this value to control the width of each category item

  const scrollLeft = () => {
    setScrollX(scrollX - categoryWidth);

    if (scrollX < 0) {
      setVisibilityLeftArrow(false);
    }
    if (scrollX <= 200) {
      setVisibilityLeftArrow(false);
      setScrollX(0);
    }
    if (scrollX <= 8200) {
      setVisibilityRightArrow(true);
    }
  };

  const scrollRight = () => {
    if (scrollX > -100) {
      setVisibilityLeftArrow(true);
    }
    if (scrollX >= 8100) {
      setVisibilityRightArrow(false);
    }
    setScrollX(scrollX + categoryWidth);
  };

  return (
    <div className="flex items-center justify-between overflow-hidden ">
      <div className="z-10 bg-[#111] shadow-xl ">
        <Image
          src={arrowLeft}
          className={`z-10 cursor-pointer ${
            visibilityLeftArrow ? "flex" : "hidden"
          }`}
          alt="arrow left"
          onClick={scrollLeft}
        />
      </div>

      <div
        style={{ transform: `translateX(-${scrollX}px)` }}
        className="flex px-4 justify-between w-[70vw]  whitespace-nowrap space-x-14 max-sm:text-[12px]   pb-2 text-[16px] font-tapestry text-light-white"
      >
        {Categorys.map((category, i) => {
          return <h2 key={i}>{category}</h2>;
        })}
      </div>
      <div className="z-10 bg-[#111] shadow-xl ">
        <Image
          src={arrowRight}
          className={`z-10 cursor-pointer ${
            scrollX > 7200 ? "max-sm:hidden" : ""
          } ${visibilityRightArrow ? "flex" : "hidden"}`}
          alt="arrow right"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export default ScrollBarCategories;
