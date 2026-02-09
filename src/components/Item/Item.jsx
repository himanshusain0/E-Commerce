import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-[200px] border border-black rounded-[20px] transition-transform duration-500 hover:scale-110">
      
      <Link
        to={`/product/${props.id}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={props.image}
          alt=""
          className="w-[200px] rounded-t-[20px]"
        />
      </Link>

      <p className="my-[6px] mx-[10px]">
        {props.name}
      </p>

      <div className="flex gap-5 px-[10px]">
        <div className="text-[#374151] text-[16px] font-semibold">
          ${props.new_price}
        </div>

        <div className="text-[#8c8c8c] text-[16px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
