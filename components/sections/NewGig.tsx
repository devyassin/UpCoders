import FirstBtn from "../btn/FirstBtn";
import Ckeditor from "../form/Ckeditor";
import InputCreateGig from "../form/InputCreateGig";
import InputSelectCategory from "../form/InputSelectCategory";

import AddImageGig from "../newGig/AddImageGig";

const NewGig = () => {
  return (
    <form className="flex flex-col min-h-full ">
      {/* Add image */}
      <AddImageGig />
      {/* Add title */}
      <InputCreateGig name="title" type="text" label="Title" />
      <div className="flex justify-between space-x-20 max-sm:space-x-0 max-sm:flex-col">
        <InputSelectCategory />
        <InputCreateGig
          name="deliveryTime"
          placeholder="1 refer to 1 day"
          type="number"
          label="Delivery time"
          customClasses="w-full"
        />
      </div>
      <div className="w-full mt-14 font-tajwal ckeditor-border h-[60vh] ">
        <Ckeditor />
      </div>
      <div className="flex justify-between space-x-20 max-sm:space-x-0 max-sm:flex-col">
        <InputCreateGig
          name="note"
          type="text"
          label="Note"
          customClasses="w-full"
        />
        <InputCreateGig
          name="price"
          type="number"
          label="Price"
          customClasses="w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-20 max-sm:gap-x-0 max-sm:grid-cols-1">
        <InputCreateGig
          name="feature1"
          type="text"
          label="Feature 1"
          customClasses="w-full"
        />
        <InputCreateGig
          name="feature2"
          type="text"
          label="Feature 2"
          customClasses="w-full"
        />
        <InputCreateGig
          name="feature3"
          type="text"
          label="Feature 3"
          customClasses="w-full"
        />
      </div>
      <div className="w-1/4 mt-10 max-sm:w-full">
        <button
          className={` text-dark-3 text-center py-2 w-full font-tajwal text-[22px] font-medium rounded-[7px] hover:bg-dark-green hover:duration-500 transition hover:opacity-80   hover:ease-in-out bg-light-green`}
        >
          New
        </button>
      </div>
    </form>
  );
};

export default NewGig;
