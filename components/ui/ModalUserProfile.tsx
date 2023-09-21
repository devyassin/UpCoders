"use client";
import { motion, AnimatePresence } from "framer-motion";
import UserProfileIcon from "./UserProfileIcon";
import { userProfileModalLinks } from "@/constants/links";
import { showProfileModal } from "@/store/modalSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useAppSelector } from "@/store/store";
import Triangle from "./Triangle";

const ModalUserProfile = () => {
  const dispatch = useDispatch<any>();
  const ProfileModalVisibility = useAppSelector(
    (state) => state.modal.ProfileModalVisibility,
  );

  return (
    <>
      <AnimatePresence>
        {ProfileModalVisibility && (
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.6 },
              show: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.4,
            }}
            className="absolute right-5 top-[88px] flex flex-col items-end"
          >
            <Triangle />
            <div className="bg-dark-7 rounded-[7px] py-4 drop-shadow-lg ">
              {/* User Info */}
              <div className="flex w-[300px] items-center justify-start  space-x-6 px-6">
                <UserProfileIcon
                  height={40}
                  width={40}
                  custumStylesImage="h-[42px] w-[42px]"
                  custumStylesOnline="h-[12px] w-[12px] -translate-y-3 translate-x-8"
                />
                <div className="flex flex-col space-y-1 font-tajwal">
                  <h1 className="text-light-green text-[16px] ">
                    yassine lamouadden
                  </h1>
                  <h1 className="text-light-white text-[14px]">
                    mouden529@gmail.com
                  </h1>
                </div>
              </div>
              <div className="px-6">
                {" "}
                <hr className="mt-2 min-w-full bg-[#C49494] opacity-40" />
              </div>
              <div className="font-tajwal text-light-white mt-6 flex flex-col space-y-2 text-[16px] opacity-80 ">
                {userProfileModalLinks.map((link, i) => {
                  return (
                    <Link
                      key={i}
                      onClick={() => {
                        dispatch(showProfileModal());
                      }}
                      href={`/dashboard${link.route}`}
                      className="hover:bg-darken flex h-[35px]  items-center px-6 hover:cursor-pointer hover:duration-150"
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="px-6">
                <hr className="mt-6 min-w-full bg-[#C49494] opacity-40" />
              </div>
              <div className="font-tajwal text-light-white hover:bg-darken mt-4 flex h-[35px] items-center px-6  text-[16px] opacity-80 hover:cursor-pointer hover:duration-150">
                Logout
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalUserProfile;
