"use client";
import { useState } from "react";

const MobileShowBtn = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => setActive((prev) => !prev)}
      id="menu"
      className="z-40 flex-col hidden space-y-2 text-black cursor-pointer max-2sm:flex "
    >
      <div id="first" className={`bg-white ${active ? "animate-1" : ""}`}></div>
      <div id="second" className={`bg-white ${active ? "hidden" : ""}`}></div>
      <div id="third" className={`bg-white ${active ? "animate-2" : ""}`}></div>
    </div>
  );
};

export default MobileShowBtn;
