"use client";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";
import React from "react";

const NewGig = () => {
  return (
    <div className="flex flex-col">
      {/* Add image */}
      <div className="w-full  bg-blue-dark-3 h-[30vh] border border-black border-dashed flex items-center justify-center">
        <div>
          <UploadButton<OurFileRouter>
            className="ut-label:text-[10px]"
            endpoint="gigImageUploader"
            onUploadProgress={() => {}}
            onClientUploadComplete={(res: any) => {
              if (res) {
                const json = JSON.stringify(res);
                const imageInfo = res[0];
                const { fileUrl, fileKey } = imageInfo;
              }
            }}
            onUploadError={(error: Error) => {
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
      </div>
    </div>
  );
};

export default NewGig;
