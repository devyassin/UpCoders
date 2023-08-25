"use client";
import { handleUserForm } from "@/store/UserSlice";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

type Props = {
  active: string;
  type: string;
};

const PartThree = ({ active, type }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className={`${active == type ? "" : "hidden"}`}>
      <div className="flex flex-col py-4 items-start w-full">
        <label className="label">Bio</label>
        <textarea
          onChange={(
            event: ChangeEvent<
              HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
            >
          ) => {
            return dispatch(
              handleUserForm({ name: "bio", value: event.target.value })
            );
          }}
          className="input-form focus:bg-dark-6 outline-none text-sm font-tajwal px-[28px] pt-[25px] pb-[19px] text-white/60 mt-2 w-full"
          id="bio"
          name="bio"
          rows={9}
          cols={50}
        ></textarea>
      </div>
    </div>
  );
};

export default PartThree;
