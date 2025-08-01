/**
 * @copyright 2025 Fisher9ine   
 * @license Apache-2.0
 */

import { useState } from "react"; 
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 h-24 flex items-center">
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 flex justify-between items-center h-20">

        {/* Logo - Left */}
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.svg"
              width={80}
              height={80}
              alt="Bukola David"
              className="block"
            />
          </a>
        </h1>

        {/* Navbar - Center */}
        <div className="relative hidden md:flex justify-center">
          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact Me - Right */}
        <div className="hidden md:flex justify-end">
          <a
            href="#contact"
            className="btn btn-secondary"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end col-span-2 fixed right-4">
          <button
            className="menu-btn"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Navbar */}
        {navOpen && (
          <div className="md:hidden col-span-3">
            <Navbar navOpen={navOpen} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
