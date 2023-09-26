import UploadImageGig from "../form/UploadImageGig";

const NewGig = () => {
  return (
    <div className="flex flex-col">
      {/* Add image */}
      <div className="w-full  bg-blue-dark-3 h-[30vh] border border-black border-dashed flex items-center justify-center">
        <UploadImageGig />
      </div>
    </div>
  );
};

export default NewGig;
