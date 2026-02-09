import React from "react";
import data_product from "../../assets/data.js";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-3 h-[90vh]">

      <h1 className="text-[#171717] text-[40px] font-semibold">
        Popular in women
      </h1>

      <hr className="w-[200px] h-[6px] rounded-lg bg-[#252525] border-none" />

      <div className="mt-[50px] flex gap-[30px] flex-wrap justify-center">
        {data_product.map((item, i) => (
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

export default Popular;
