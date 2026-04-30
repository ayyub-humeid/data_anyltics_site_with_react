import React from "react";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    console.log("sdsd");
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-[#00df9a] w-full text-3xl font-bold">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="block md:hidden">
        {nav ? (
          <div onClick={handleNav}>
            <MdClose size={20} />
          </div>
        ) : (
          <div className="hover:cursor-pointer" onClick={handleNav}>
            <RiMenuFill size={20} />
          </div>
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300]  ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-[#00df9a] w-full text-3xl font-bold m-4">REACT.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
