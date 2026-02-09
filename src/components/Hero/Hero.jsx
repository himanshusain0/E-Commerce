import React from "react";
import hand_icon from "../../../src/assets/hand_icon.png";
import arrow_icon from "../../../src/assets/arrow_icon.png";
import men2 from "../../../src/assets/men2.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-[#47fdae] to-[#e1ffea22] px-6 md:px-20">

      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center gap-3 text-center md:text-left">

        <h2 className="text-[#090909] text-[18px] md:text-[20px] font-semibold">
          Best Deals ! Best Prices !
        </h2>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <p className="text-[#171717] text-[40px] md:text-[60px] font-bold">
            new
          </p>
          <img src={hand_icon} alt="hand" className="h-[40px] md:h-[60px]" />
        </div>

        <p className="text-[#171717] text-[40px] md:text-[60px] font-bold">
          collections
        </p>

        <p className="text-[#171717] text-[40px] md:text-[60px] font-bold">
          for everyone
        </p>

        <div className="mt-6 flex justify-center md:justify-start">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff4141] text-white text-[16px] md:text-[18px] font-medium hover:bg-red-600 transition">
            Latest Collection
            <img src={arrow_icon} alt="arrow" className="h-[24px]" />
          </button>
        </div>

      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
        <img
          src={men2}
          alt="model"
          className="h-[250px] md:h-[400px] object-contain"
        />
      </div>

    </div>
  );
};

export default Hero;
