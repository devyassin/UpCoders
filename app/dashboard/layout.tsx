import HeaderNavBar from "@/components/navBars/HeaderNavBar";
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
    <div className="flex flex-col bg-black h-screen">
      <HeaderNavBar />
      <div className="flex h-full">
        <SideNavBar />
        {children}
      </div>
    </div>
  );
}
