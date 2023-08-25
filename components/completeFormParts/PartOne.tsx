import Image from "next/image";
import React from "react";
import InputSelectDomaineExpertisme from "../form/InputSelectDomaineExpertisme";
import InputSelectSkills from "../form/InputSelectSkills";
import UploadImageProfile from "../form/UploadImageProfile";
import { useAppSelector } from "@/store/store";
import { choosePic } from "@/public/assets";

type Props = {
  active: string;
  type: string;
};

const PartOne = ({ active, type }: Props) => {
  const uploadStatusImage = useAppSelector(
    (state) => state.uploadProfilePicture.uploadingImageStatus
  );
  const image: any = useAppSelector(
    (state) => state.uploadProfilePicture.image
  );
  const imageStored: any = useAppSelector((state) => state.user.user.picture);
  return (
    <div className={`${active == type ? "" : "hidden"}`}>
      <div className="flex max-md:flex-col  items-center">
        <div className="w-[120px]   h-[120px] max-md:w-[110px] max-md:h-[110px] flex items-center justify-center ">
          {imageStored && !image ? (
            <div className="circle-image w-[90px] h-[90px] ">
              <Image
                className={`w-[90px] h-[90px] rounded-full object-cover object-center circle-image  ${
                  uploadStatusImage === "loading" ? "animate-pulse" : ""
                } `}
                quality={100}
                src={imageStored?.fileUrl}
                height={90}
                width={90}
                alt="profile pic"
              />
            </div>
          ) : image ? (
            <div className="circle-image w-[90px] h-[90px] ">
              <Image
                className={`w-[90px] h-[90px] rounded-full object-cover object-center circle-image  ${
                  uploadStatusImage === "loading" ? "animate-pulse" : ""
                } `}
                quality={100}
                src={image?.url}
                height={90}
                width={90}
                alt="profile pic"
              />
            </div>
          ) : (
            <Image
              className={`w-full ${
                uploadStatusImage === "loading" ? "animate-spin" : ""
              }`}
              quality={100}
              src={choosePic}
              height={150}
              width={150}
              alt="choose pic"
            />
          )}
        </div>

        <UploadImageProfile />
        {/* <input
          name="profilePic"
          id="profilePic"
          type="file"
          className="bg-transparent -translate-x-20 max-md:-translate-x-0 border-none p-0 outline-none text-white custom-file-input"
        /> */}
      </div>
      <div className="flex flex-col py-4 items-start">
        <label className="label">Skills</label>
        <InputSelectSkills />
      </div>
      <div className="flex flex-col py-4 items-start">
        <label className="label">Domain Expertise</label>
        <InputSelectDomaineExpertisme />
      </div>
    </div>
  );
};

export default PartOne;
