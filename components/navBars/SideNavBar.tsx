import { links } from "@/constants/links";
import LogoutBtn from "../btn/LogoutBtn";

import SideBarBtn from "../btn/SideBarBtn";
const SideNavBar = () => {
  return (
    <div className="flex flex-col justify-between bg-dark-2 pt-12 pb-6 px-6">
      <div className=" w-[240px] flex flex-col space-y-6">
        {links.map((link) => {
          return <SideBarBtn {...link} />;
        })}
      </div>
      <div>
        <LogoutBtn />
      </div>
    </div>
  );
};

export default SideNavBar;
