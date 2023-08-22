import "@uploadthing/react/styles.css";
import "../styles/globals.css";
import type { Metadata } from "next";
import { StoreProvider } from "@/store/StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "UpCoders",
  description: "Upcoders is a platform for (devlopers,designers) freelancers ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
