"use client";
import { motion, AnimatePresence } from "framer-motion";
import Triangle from "./Triangle";
import { ringFill } from "@/public/assets";
import Image from "next/image";
import Notification from "./Notification";
import { useAppSelector } from "@/store/store";
import { ScrollArea } from "../shadcn/ui/scroll-area";

const ModalNotifications = () => {
  const NotificationsModalVisibility = useAppSelector(
    (state) => state.modal.NotificationsModalVisibility
  );
  return (
    <>
      <AnimatePresence>
        {NotificationsModalVisibility && (
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
            className="absolute z-20 right-[330px] top-[88px] flex flex-col items-end"
          >
            <Triangle />
            <div className="bg-dark-7 font-tajwal rounded-[7px] py-4 drop-shadow-lg ">
              <div className="flex  flex-col w-[300px]">
                <div className="flex items-center px-4 space-x-3">
                  <Image
                    src={ringFill}
                    alt="ring fill"
                    className="w-[20px] h-[24px]"
                    width={24}
                    height={26}
                  />
                  <h1 className="text-[14px] tracking-wider text-[#C7D8EB]">
                    Notifications
                    <span className="pl-1 text-light-green">(3)</span>
                  </h1>
                </div>
                <hr className="mt-2 min-w-full bg-[#C49494] opacity-40" />
              </div>
              <ScrollArea className="flex flex-col h-[300px] ">
                <Notification
                  message="You have just two gigs . Create more gigs to earn more money and gain
          new clients"
                  date="2 Days"
                />
                <Notification
                  message="You have just two gigs . Create more gigs to earn more money and gain
          new clients"
                  date="2 Days"
                />
                <Notification
                  message="You have just two gigs . Create more gigs to earn more money and gain
          new clients"
                  date="2 Days"
                />
                <Notification
                  message="You have just two gigs . Create more gigs to earn more money and gain
          new clients"
                  date="2 Days"
                />
                <Notification
                  message="You have just two gigs . Create more gigs to earn more money and gain
          new clients"
                  date="2 Days"
                />
                <Notification
                  message="You have just two gigs . Create more gigs to earn more money and gain
          new clients"
                  date="2 Days"
                />
                <Notification
                  message="You have just two gigs . Create more gigs to earn more money and gain
          new clients"
                  date="2 Days"
                />
                <Notification
                  message="You have just two gigs . Create more gigs to earn more money and gain
          new clients"
                  date="2 Days"
                />
              </ScrollArea>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalNotifications;
