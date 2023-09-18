import Image from "next/image";
import { upcoderLogo, upcoderLogoName } from "@/public/assets";
import Link from "next/link";

const HeaderNavLogo = () => {
  return (
    <Link
      href={"/dashboard/home"}
      className="flex items-center space-x-6 max-sm:hidden"
    >
      <Image src={upcoderLogo} alt="logo navHeader " />
      <Image
        src={upcoderLogoName}
        alt="logo navHeader name"
        className="max-lg:hidden"
      />
    </Link>
  );
};

export default HeaderNavLogo;
