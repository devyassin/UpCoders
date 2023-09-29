"use client";

import dynamic from "next/dynamic";
import React, { useState, useRef, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const Quill = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="w-full  font-tajwal bg-black quill-container ">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

export default Quill;
