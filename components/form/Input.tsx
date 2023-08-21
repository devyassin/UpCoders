"use client";
import { handleUserForm, setType } from "@/store/UserSlice";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
type Props = {
  type: string;
  customClasses?: string;
  name: string;
  placeholder?: string;
  value?: string;
  container?: string;
};

const Input = ({
  type,
  customClasses,
  placeholder,
  name,
  value,
  container,
}: Props) => {
  const dispatch = useDispatch();
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let { name, value }: any = event.target;
    if (name == "hourlyRate") {
      value = Number(value);
      dispatch(handleUserForm({ name, value }));
      return;
    }

    dispatch(handleUserForm({ name, value }));
  };
  return (
    <div className={`${container}`}>
      <input
        onChange={handleChange}
        value={value}
        type={type}
        min={1}
        name={name}
        className={`input-form focus:bg-dark-6 outline-none  font-tajwal h-[61px] w-[273px] px-[28px] pt-[25px] pb-[19px] text-white ${customClasses}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
