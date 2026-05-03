import React from "react";
import Logo from "../../assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Best Seller", link: "/#services" },
];

const DropdownLinks = [
  { name: "Trending Books", link: "/#" },
  { name: "Best Selling", link: "/#" },
  { name: "Authors", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4">

          {/* LEFT - LOGO */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            <span className="font-bold text-2xl">Books</span>
          </div>

          {/* MIDDLE - MENU */}
          <ul className="hidden sm:flex items-center gap-12 flex-1 justify-center ml-6">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="hover:text-primary transition-all duration-200 hover:scale-105 inline-block"
                >
                  {menu.name}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li className="group relative cursor-pointer">
              <div className="flex items-center gap-1 hover:text-primary transition">
                Quick Links <FaCaretDown className="group-hover:rotate-180 transition" />
              </div>

              <div className="absolute left-0 top-8 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 w-[160px] z-50">
                <ul className="space-y-2">
                  {DropdownLinks.map((data) => (
                    <li key={data.name}>
                      <a
                        href={data.link}
                        className="block px-2 py-1 rounded hover:bg-primary/20 hover:scale-105 transition"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* RIGHT - SEARCH + THEME + ORDER */}
          <div className="flex items-center gap-3">

            {/* SEARCH */}
            <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-100 dark:bg-gray-800 w-[220px]">
              <FaSearch className="text-gray-500 text-sm mr-2" />
              <input
                type="text"
                placeholder="Search books..."
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>

            {/* DARK MODE */}
            <DarkMode />

            {/* ORDER BUTTON */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition text-white py-1 px-4 rounded-full flex items-center gap-2"
            >
              Order <FaCartShopping />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;