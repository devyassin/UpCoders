"use client";

import { motion } from "framer-motion";
import { showMobileNavigationModal } from "@/store/modalSlice";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";

const MobileShowBtn = () => {
  const active = useAppSelector(
    (state) => state.modal.MobileNavigationVisibility
  );

  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(showMobileNavigationModal());
      }}
      id="menu"
      className="z-40 flex-col hidden space-y-2 text-black cursor-pointer max-2sm:flex "
    >
      <motion.div
        id="first"
        animate={{ rotate: active ? 45 : 0, translateY: active ? 10 : 0 }}
        transition={{ duration: 1, type: "spring" }}
        className={`bg-white `}
      ></motion.div>
      <motion.div
        id="second"
        className={`bg-white`}
        animate={{ display: active ? "none" : "" }}
        transition={{ duration: 1, type: "spring" }}
      ></motion.div>
      <motion.div
        animate={{ rotate: active ? -45 : 0 }}
        transition={{ duration: 1, type: "spring" }}
        id="third"
        className={`bg-white `}
      ></motion.div>
    </div>
  );
};

export default MobileShowBtn;
