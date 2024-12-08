import React from "react";
import AddWantedItemForm from "./AddWantedItemForm";

const AddWantedItem = () => {
  return (
    <div>
      <h2 className="mb-4 pl-1 text-xl font-bold text-gray-100 sm:text-2xl">
        欲しい物
      </h2>
      <AddWantedItemForm />
    </div>
  );
};

export default AddWantedItem;