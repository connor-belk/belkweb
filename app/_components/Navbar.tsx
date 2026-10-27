"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className={`w-full bg-gradient-to-b from-slate-500 to-slate-950/5`}>
      <Link href="/" className="text-lg md:text-3xl">
        <h1 className="text-center text-2xl px-3 pt-3 pb-4 font-bold">
          &lt;h1&gt;belkweb.dev&lt;/h1&gt;
        </h1>
      </Link>

      {/* Mobile Nav Button Bottom Right of Screen (Absolute Positioning) */}

      <button type="button" onClick={handleClick} aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" className="fixed z-10 bottom-8 right-8 bg-slate-800 rounded-full border-2 border-slate-600 p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300">
        {isOpen ? (
          <AiOutlineClose className="h-8 w-8" aria-hidden="true" />
        ) : (
          <AiOutlineMenu className="h-8 w-8" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Nav Menu Slide Up from Bottom of Screen (Absolute Positioning) */}

      <div
        id="mobile-navigation"
        inert={!isOpen}
        className={`fixed bottom-0 left-0 w-screen h-[85%] bg-slate-800 transition-all duration-300 ease-in-out
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
