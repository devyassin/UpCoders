"use client";

import "@uploadthing/react/styles.css";
import { utapi } from "uploadthing/server";

import { UploadButton } from "@uploadthing/react";
import { useDispatch } from "react-redux";

import { OurFileRouter } from "@/app/api/uploadthing/core";

import { useState } from "react";
import {
  setImageInfo,
  setImageStatusToFailed,
  setImageStatusToloading,
  setImageStatusToSuccess,
  updateUserProfilePicture,
} from "@/store/UploadProfilePictureSlice";

export default function UploadImageProfile() {
  const dispatch = useDispatch<any>();
  const [image, setImage] = useState<{
    fileUrl: string;
    fileKey: string;
  }>();

  return (
    <div>
      <UploadButton<OurFileRouter>
        className="ut-label:text-[10px]"
        endpoint="profileUploader"
        onUploadProgress={() => {
          dispatch(setImageStatusToloading());
        }}
        onClientUploadComplete={(res: any) => {
          dispatch(setImageStatusToSuccess());
          if (res) {
            setImage(res[0]);

            const json = JSON.stringify(res);
            const imageInfo = res[0];
            dispatch(setImageInfo(imageInfo));
            dispatch(updateUserProfilePicture(res[0]));
            console.log(res[0]);
          }
        }}
        onUploadError={(error: Error) => {
          dispatch(setImageStatusToFailed());
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        appearance={{
          button: "bg-[#222] after:bg-[#222]",
          container: "w-max flex-row  text-[14px] font-tajwal",
          allowedContent: "hidden",
        }}
      />
    </div>
  );
}
