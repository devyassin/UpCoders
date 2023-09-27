"use client";
import UploadImageGigBtn from "../form/UploadImageGigBtn";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import GigImageSkeleton from "../skeleton/GigImageSkeleton";

const AddImageGig = () => {
  const uploadStatusImage = useAppSelector(
    (state) => state.uploadProfilePicture.uploadingImageStatus
  );
  const image: any = useAppSelector(
    (state) => state.uploadProfilePicture.image
  );
  return (
    <>
      {uploadStatusImage === "loading" ? (
        <GigImageSkeleton>
          <></>
        </GigImageSkeleton>
      ) : uploadStatusImage === "success" ? (
        <GigImageSkeleton className="animate-none">
          <Image
            src={image?.url}
            alt="image gig"
            className="h-[50vh] w-full z-10 rounded-lg"
            width={1000}
            height={1000}
            quality={100}
          />
        </GigImageSkeleton>
      ) : (
        <div className="w-full bg-blue-dark-3 h-[50vh] border border-black border-dashed flex items-center justify-center">
          {uploadStatusImage !== "success" && <UploadImageGigBtn />}
        </div>
      )}
    </>
  );
};

export default AddImageGig;
