"use client";
import { handleGigForm, addFeature } from "@/store/newGigSlice";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

type Props = {
  type: string;
  label: string;
  customClasses?: string;
  name: string;
  placeholder?: string;
  value?: string;
};

const InputCreateGig = ({
  label,
  name,
  type,
  customClasses,
  placeholder,
  value,
}: Props) => {
  const dispatch = useDispatch();
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let { name, value }: any = event.target;
    if (type == "number") {
      value = Number(value);
      dispatch(handleGigForm({ name, value }));
      return;
    }
    if (name == "feature1" || name == "feature2" || name == "feature3") {
      dispatch(addFeature({ name, value }));
      return;
    }

    dispatch(handleGigForm({ name, value }));
  };
  return (
    <div
      className={`flex flex-col mt-10 space-y-4 tracking-wider font-tajwal ${customClasses}`}
    >
      <label className="text-[32px]">{label}</label>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        className="px-6 py-4 outline-none input-creategig"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputCreateGig;
