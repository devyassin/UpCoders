"use client";
import { useState } from "react";
import Image from "next/image";
import { handleUserForm } from "@/store/UserSlice";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
type Props = {
  customClasses?: string;
  name: string;
  placeholder?: string;
  value?: string;
};

const InputPassword = ({ customClasses, placeholder, name, value }: Props) => {
  const [show, setShow] = useState(false);
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
    <div className="relative">
      <input
        onChange={handleChange}
        value={value}
        type={show ? "password" : "text"}
        name={name}
        className={`input-form focus:bg-dark-6 outline-none font-tajwal h-[61px] w-[273px] px-[28px] pt-[25px] pb-[19px] text-white ${customClasses} `}
        placeholder={placeholder}
      />
      {show ? (
        <Image
          onClick={() => setShow(false)}
          className="absolute max-md:left-[88%] top-[62%] left-[92%] cursor-pointer"
          src="/assets/hiddenEye.png"
          height={14}
          width={20}
          alt="hidden eye"
        />
      ) : (
        <Image
          onClick={() => setShow(true)}
          className="absolute max-md:left-[88%] top-[62%] left-[92%] cursor-pointer"
          src="/assets/showenEye.png"
          height={14}
          width={20}
          alt="hidden eye"
        />
      )}
    </div>
  );
};

export default InputPassword;
