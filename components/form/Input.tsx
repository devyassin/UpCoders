"use client";
import { handleUserForm } from "@/store/UserSlice";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
type Props = {
  type: string;
  customClasses?: string;
  name: string;
  placeholder?: string;
  value?: string;
};

const Input = ({ type, customClasses, placeholder, name, value }: Props) => {
  const dispatch = useDispatch();
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    dispatch(handleUserForm({ name, value }));
  };
  return (
    <div>
      <input
        onChange={handleChange}
        value={value}
        type={type}
        name={name}
        className={`input-form focus:bg-dark-6 outline-none  font-tajwal h-[61px] w-[273px] px-[28px] pt-[25px] pb-[19px] text-white ${customClasses}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
