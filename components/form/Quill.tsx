"use client";

import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { handleGigForm } from "@/store/newGigSlice";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const Quill = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  useEffect(() => {
    name = "description";
    dispatch(handleGigForm({ name, value }));
  }, [value]);

  return (
    <div className="w-full  font-tajwal bg-black quill-container ">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

export default Quill;
