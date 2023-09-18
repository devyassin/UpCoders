"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  route: string;
  name: string;
  icon: StaticImageData;
};

const SideBarBtn = ({ route, name, icon }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      className={`text-2xl ${
        pathname.includes(route)
          ? "bg-dark-green "
          : "hover:opacity-60 hover:duration-300"
      } h-[62px] pl-4 rounded-xl flex items-center space-x-6 font-tajwal`}
      href={`/dashboard${route}`}
    >
      <Image
        src={icon}
        alt={name}
        className={`${name === "My Business" ? "mr-2" : ""} `}
      />
      <h1 className="text-xl text-white max-xl:hidden">{name}</h1>
    </Link>
  );
};

export default SideBarBtn;
