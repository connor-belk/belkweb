"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineUp } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-gradient-to-b from-slate-500 to-slate-950/5`}>
      <Link href="/" className="text-lg md:text-3xl">
        <h1 className="text-center px-3 pt-3 pb-4">
          &lt;h1&gt; Belk Web Development &lt;/h1&gt;
        </h1>
      </Link>

      {/* Mobile Nav Button Bottom Right of Screen (Absolute Positioning) */}

      <button className="fixed z-10 bottom-8 right-8 bg-slate-800 rounded-full border-2 border-slate-600 p-4">
        <AiOutlineUp
          className={`${
            isOpen ? "rotate-180 ease-in duration-300" : "ease-in duration-300"
          } h-8 w-8`}
          onClick={handleClick}
        />
      </button>

      {/* Mobile Nav Menu Slide Up from Bottom of Screen (Absolute Positioning) */}

      <div
        className={`fixed bottom-0 w-screen h-[85%] bg-slate-800 transition-all duration-300 ease-in-out 
    ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <ul className="h-full text-4xl flex flex-col items-center justify-center gap-6 p-4">
          <li>
            <Link href={"/"} onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/services"} onClick={handleClick}>
              Services
            </Link>
          </li>
          <li>
            <Link href={"/about"} onClick={handleClick}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={handleClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
