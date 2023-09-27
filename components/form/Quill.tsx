"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Quill = () => {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="w-full  font-tajwal ">
      <ReactQuill
        theme="snow"
        className="h-[40vh] bg-black text-white w-full "
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default Quill;
