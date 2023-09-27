import React from "react";

const InputCreateGig = () => {
  return (
    <div className="flex flex-col mt-10 space-y-4 tracking-wider pb-[500px] font-tajwal">
      <label className="text-[32px]">Title</label>
      <input className="px-6 py-4 outline-none input-creategig" type="text" />
    </div>
  );
};

export default InputCreateGig;
