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
    </form>
  );
};

export default NewGig;
