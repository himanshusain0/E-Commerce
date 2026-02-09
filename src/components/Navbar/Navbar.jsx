import React, { useState } from "react";
import logo from "../../../src/assets/logo1.png";
import cart from '../../../src/assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu , setMenu] = useState("Home")
  return (
    <div className="flex justify-around p-4 shadow-2xl">
      
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="flex items-center gap-1  h-[3vw]" />
      </div>

      {/* Menu */}
      <div>
        <ul className="flex items-center list-none gap-12 text-[#626262] text-[18px] font-medium">
          <li onClick={()=>{setMenu("home")}}  className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"><Link to='/'>Home</Link>
            {menu==="home" ?<hr className="border-none w-[80%] h-[3px] rounded-lg bg-[#ff4141]"/>:<></>}
          </li>
          <li onClick={()=>{setMenu("men")}} className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"><Link to='/men'>Mens</Link>
            {menu==="men" ?<hr className="border-none w-[80%] h-[3px] rounded-lg bg-[#ff4141]"/>:<></>}
          </li>
          <li onClick={()=>{setMenu("women")}} className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"><Link to='/women'>Womens</Link>
            {menu==="women" ?<hr className="border-none w-[80%] h-[3px] rounded-lg bg-[#ff4141]"/>:<></>}
          </li>
          <li onClick={()=>{setMenu("kid")}} className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"><Link to='/kids'>Kids</Link>
            {menu==="kid" ?<hr className="border-none w-[80%] h-[3px] rounded-lg bg-[#ff4141]"/>:<></>}
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Link to='/cart'><img
          src={cart}
          alt="Cart"
          className="flex h-[2vw]"
        /></Link>
       <Link to='/login'> <button className="w-[140px] h-[40px] border border-[#7a7a7a] rounded-full text-[#515151] text-[16px] font-medium bg-white cursor-pointer">
          Login
        </button></Link>
      </div>

    </div>
  );
};

export default Navbar;
