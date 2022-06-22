import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9e]">REACT.</h1>
      <ul className="hidden uppercase font-semibold md:flex">
        <li className="p-4 cursor-pointer hover:text-[#00DF9E] duration-300">
          Home
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00DF9E] duration-300">
          Company
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00DF9E] duration-300">
          Resources
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00DF9E] duration-300">
          About
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00DF9E] duration-300">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9e] m-4">REACT.</h1>
        <ul className="uppercase p-4 font-semibold">
          <li className="p-4 cursor-pointer hover:text-[#00DF9E] duration-300">
            Home
          </li>
          <li className="p-4 cursor-pointer hover:text-[#00DF9E] duration-300">
            Company
          </li>
          <li className="p-4 cursor-pointer hover:text-[#00DF9E] duration-300">
            Resources
          </li>
          <li className="p-4 cursor-pointer hover:text-[#00DF9E] duration-300">
            About
          </li>
          <li className="p-4 cursor-pointer hover:text-[#00DF9E] duration-300">
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
