"use client";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";
import { useDispatch } from "react-redux";
import { handleGigForm } from "@/store/newGigSlice";
import {
  setImageInfo,
  setImageStatusToFailed,
  setImageStatusToloading,
  setImageStatusToSuccess,
} from "@/store/UploadProfilePictureSlice";
import { useState } from "react";
const UploadImageGigBtn = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState<{
    fileUrl: string;
    fileKey: string;
  }>();
  return (
    <div>
      <UploadButton<OurFileRouter>
        className="ut-label:text-[10px]"
        endpoint="gigImageUploader"
        onUploadProgress={() => {
          dispatch(setImageStatusToloading());
        }}
        onClientUploadComplete={(res: any) => {
          dispatch(setImageStatusToSuccess());
          if (res) {
            setImage(res[0]);
            const json = JSON.stringify(res);
            const imageInfo = res[0];
            const { fileUrl, fileKey } = imageInfo;
            dispatch(setImageInfo(imageInfo));

            dispatch(
              handleGigForm({
                name: "picture",
                value: { fileUrl: fileUrl, fileKey: fileKey },
              })
            );
          }
        }}
        onUploadError={(error: Error) => {
          dispatch(setImageStatusToFailed());
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        appearance={{
          button:
            "bg-light-green text-black font-semibold  after:bg-light-green",
          container: "w-max flex-row  text-[14px] font-tajwal",
          allowedContent: "hidden",
        }}
      />
    </div>
  );
};

export default UploadImageGigBtn;
