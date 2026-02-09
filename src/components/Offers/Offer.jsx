import React from "react";
import exclusive from "../../assets/OIP.jpg";

const Offer = () => {
  return (
    <div className="w-[65%] h-[60vh] flex mx-auto mt-[150px] mb-[150px] px-[140px]
      bg-gradient-to-b from-[#e1ffea22] to-[#47fdae]">

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-[40px] font-semibold">Exclusive</h1>
        <h1 className="text-[#171717] text-[40px] font-semibold">Offer for you</h1>

        <p className="text-[#171717] text-[18px] font-semibold mt-2">
          Best Offers for you
        </p>
        <p className="text-[#171717] text-[18px] font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>

        <button className="w-[200px] h-[40px] mt-[30px] rounded-[35px]
          bg-[#ff4141] text-white text-[16px] font-medium cursor-pointer
          hover:bg-red-600 transition">
          Check Now
        </button>
      </div>

      <div className="flex-1 flex items-center justify-end">
        <img src={exclusive} alt="" className="h-[330px]" />
      </div>

    </div>
  );
};

export default Offer;
