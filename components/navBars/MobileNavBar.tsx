"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/store/store";
const MobileNavBar = () => {
  const showMobileNavBar = useAppSelector(
    (state) => state.modal.MobileNavigationVisibility,
  );
  return (
    <>
      <AnimatePresence>
        {showMobileNavBar && (
          <motion.div
            variants={{
              hidden: { width: "200px", height: "200px" },
              show: { width: "100vw", height: "100vh", borderRadius: 0 },
              exit: {
                width: "200px",
                height: "200px",
                borderRadius: "200px",
                opacity: 0,
              },
            }}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 0.5, type: "spring", bounce: 0 }}
            className="absolute z-20 hidden text-white -translate-x-1/2 -translate-y-1/2 bg-black rounded-full left-1/2 top-1/2"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavBar;
