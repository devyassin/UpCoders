import InputCreateGig from "../form/InputCreateGig";
import AddImageGig from "../newGig/AddImageGig";

const NewGig = () => {
  return (
    <div className="flex flex-col min-h-full ">
      {/* Add image */}
      <AddImageGig />
      {/* Add title */}
      <InputCreateGig />
    </div>
  );
};

export default NewGig;
