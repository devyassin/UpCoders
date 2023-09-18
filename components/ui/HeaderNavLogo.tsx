import Image from "next/image";
import { logoHeaderNav } from "@/public/assets";
import Link from "next/link";

const HeaderNavLogo = () => {
  return (
    <Link  href={"/dashboard/home"}>
      <Image src={logoHeaderNav} alt="logo navHeader" />
    </Link>
  );
};

export default HeaderNavLogo;
