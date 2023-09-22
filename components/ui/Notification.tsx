import Image from "next/image";
import { ringWhite } from "@/public/assets";

type Props = {
  message: string;
  date: string;
};

const Notification = ({ message, date }: Props) => {
  return (
    <div className="cursor-pointer hover:bg-darken hover:duration-300">
      <hr className="  min-w-full bg-[#C49494] opacity-20" />
      <div className="flex items-start px-2 pt-4 mb-2 space-x-4">
        <div className="w-[60px] h-[60px] mt-1 flex items-center justify-center bg-blue-dark-1 rounded-full">
          <Image src={ringWhite} width={18} height={20} alt="ring white" />
        </div>
        <div className="flex flex-col space-y-1">
          <p className="w-[200px] text-[13px] text-[#fff]">{message}</p>
          <h1 className="text-[13px] font-bold text-bluen">{date}</h1>
        </div>
      </div>
    </div>
  );
};

export default Notification;
