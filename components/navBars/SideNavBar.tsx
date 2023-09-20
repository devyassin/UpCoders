"use client";
import { links } from "@/constants/links";
import LogoutBtn from "../btn/LogoutBtn";
import { usePathname } from "next/navigation";

import SideBarBtn from "../btn/SideBarBtn";
const SideNavBar = () => {
  const pathname = usePathname();
  console.log(pathname);

  if (!pathname.includes("settings") &&  !pathname.includes("messages")) {
    return (
      <div className="flex flex-col justify-between px-6 pt-12 pb-6 bg-dark-2 max-2sm:hidden">
        <div className=" flex w-[240px]  flex-col space-y-6 max-xl:w-[60px]">
          {links.map((link) => {
            return <SideBarBtn {...link} />;
          })}
        </div>
        <div>
          <LogoutBtn />
        </div>
      </div>
    );
  }
};

export default SideNavBar;
