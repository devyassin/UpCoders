import FetchUser from "@/components/fetchDataComponents/FetchUser";
import HeaderNavBar from "@/components/navBars/HeaderNavBar";
import MobileNavBar from "@/components/navBars/MobileNavBar";
import SideNavBar from "@/components/navBars/SideNavBar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UpCoders Dashboard",
  description: "This is the dashboard of Upcoders ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col bg-[#111]">
      <div className="hidden max-2sm:flex">
        <MobileNavBar />
      </div>
      <FetchUser />
      <HeaderNavBar />
      <div className="flex h-full">
        <SideNavBar />

        {children}
      </div>
    </div>
  );
}
