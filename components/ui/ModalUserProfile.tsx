
import UserProfileIcon from "./UserProfileIcon";
import { userProfileModalLinks } from "@/constants/links";


type Props = {};
const ModalUserProfile = (props: Props) => {
  return (
    <div className="bg-dark-7 rounded-[7px] py-4 drop-shadow-lg ">
      {/* User Info */}
      <div className="flex w-[300px] items-center justify-start  space-x-6 px-6">
        <UserProfileIcon
          custumStylesImage="h-[42px] w-[42px]"
          custumStylesOnline="h-[12px] w-[12px] -translate-y-3 translate-x-8"
        />
        <div className="flex flex-col space-y-1 font-tajwal">
          <h1 className="text-[16px] text-light-green ">yassine lamouadden</h1>
          <h1 className="text-light-white text-[14px]">mouden529@gmail.com</h1>
        </div>
      </div>
      <div className="px-6">
        {" "}
        <hr className="mt-2 min-w-full bg-[#C49494] opacity-40" />
      </div>
      <div className="text-light-white mt-6 flex flex-col space-y-2 font-tajwal text-[16px] opacity-80 ">
        {userProfileModalLinks.map((link) => {
          return (
            <div className="hover:bg-darken flex h-[35px]  items-center px-6 hover:cursor-pointer hover:duration-150">
              {link}
            </div>
          );
        })}
      </div>
      <div className="px-6">
        <hr className="mt-6 min-w-full bg-[#C49494] opacity-40" />
      </div>
      <div className="hover:bg-darken font-tajwal text-[16px] opacity-80 text-light-white mt-4 flex h-[35px]  items-center px-6 hover:cursor-pointer hover:duration-150">
        Logout
      </div>
    </div>
  );
};

export default ModalUserProfile;
