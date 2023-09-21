"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/store/store";
import UserProfileIcon from "../ui/UserProfileIcon";
import { links, linksMobile } from "@/constants/links";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import Link from "next/link";

const MobileNavBar = () => {
  const showMobileNavBar = useAppSelector(
    (state) => state.modal.MobileNavigationVisibility,
  );
  const pathname = usePathname();

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
            className="absolute z-20 text-white -translate-x-1/2 -translate-y-1/2 bg-black rounded-full left-1/2 top-1/2"
          >
            <div className="flex h-[100vh] flex-col items-center pt-20">
              <UserProfileIcon
                width={100}
                height={100}
                custumStylesImage="w-[100px] h-[100px] z-10"
                custumStylesOnline="hidden"
                showModal={false}
              />
              <hr className="bg-dark-7 absolute w-full translate-y-[50px] opacity-20" />
              <div className="flex flex-col w-full pt-6 space-y-4">
                {links.map((link) => {
                  return (
                    <Link
                      className="flex justify-center w-full py-2 text-2xl hover:bg-darken hover:duration-300"
                      href={`/dashboard${link.route}`}
                    >
                      <p
                        className={`${
                          pathname.includes(link.route) &&
                          "border-golden w-fit border-b-[1px]"
                        } text-center`}
                      >
                        {link.name}
                      </p>
                    </Link>
                  );
                })}
                <Accordion type="single" collapsible className="w-full text-center">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>More</AccordionTrigger>
                    {linksMobile.map((linkMobile) => {
                      return (
                        <AccordionContent>{linkMobile.name}</AccordionContent>
                      );
                    })}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavBar;
