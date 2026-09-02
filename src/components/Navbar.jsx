import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import GGYI_logo from "../assets/images/GGYI_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo + Name */}
    <a href="/" className="flex items-center gap-3">
      <img
        src={GGYI_logo}
        alt="Green Ghana Youth Initiative Logo"
        className="w-12 h-12 rounded-full object-cover"
      />

      <h1 className="text-2xl font-bold text-green-700">
        Green Ghana Youth Initiative
      </h1>
    </a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-green-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-600 transition">
              Programs
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Donate Button */}
        <div className="hidden md:block">
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Donate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-6 space-y-4 font-medium text-gray-700">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Programs</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

            <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Donate
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;