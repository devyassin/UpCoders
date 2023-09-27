"use client";
import { handleGigForm } from "@/store/newGigSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Categorys } from "@/constants/domaineExpertisme";
import Select from "react-select";
import { categorySelectStyling } from "@/constants/styling";

const InputSelectCategory = () => {
  const dispatch = useDispatch();

  const handleCategotyChange = (selected: any) => {
    dispatch(handleGigForm({ name: "category", value: selected.label }));
  };

  const CategorysOptions = Categorys.map((category) => {
    return { value: category, label: category };
  });

  return (
    <div className="w-full flex flex-col mt-10 space-y-4 tracking-wider  font-tajwal ">
      <label className="text-[32px]">Category</label>
      <Select
      className="input-creategig text-black  "
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={categorySelectStyling}
        options={CategorysOptions}
        menuPosition="fixed"
        defaultValue={{
          value: "Full Stack Development",
          label: "Full Stack Development",
        }}
        onChange={handleCategotyChange}
      />
    </div>
  );
};

export default InputSelectCategory;
