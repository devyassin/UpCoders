"use client";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";

const UploadImageGig = () => {
  return (
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
  );
};

export default UploadImageGig;
