"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineUp, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <Link href="/" className="text-3xl">
        <h1>BWD</h1>
      </Link>

      {/* Mobile Nav Button Bottom Right of Screen (Absolute Positioning) */}

      <button className="absolute z-10 bottom-8 right-8 bg-slate-800 rounded-full border-2 border-slate-600 p-4">
        <AiOutlineUp
          className={`${
            isOpen ? "rotate-180 ease-in duration-300" : "ease-in duration-300"
          } h-8 w-8`}
          onClick={handleClick}
        />
      </button>

      {/* Mobile Nav Menu Slide Up from Bottom of Screen (Absolute Positioning) */}

      <div
        className={`fixed bottom-0 w-full h-[85%] bg-slate-800 transition-all duration-300 ease-in-out 
    ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      ></div>
    </nav>
  );
};

export default Navbar;
