import React from "react";
import new_collections from "../../assets/newcollections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-[100px]">

      <h1 className="text-[#171717] text-[40px] font-semibold">
        NEW COLLECTIONS
      </h1>

      <hr className="w-[200px] h-[6px] rounded-lg bg-[#252525] border-none" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        mt-[50px] gap-[30px]">
        {new_collections.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

    </div>
  );
};

export default NewCollections;
