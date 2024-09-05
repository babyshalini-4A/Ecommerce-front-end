import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';


const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/Hero",
  },
  {
    id: 2,
    name: "Shop",
    link: "/Shop",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/ContactUs",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ cartItems }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and links section */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-phlox font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              E-Tronix
            </Link>
            {/* Menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-5">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative group cursor-pointer">
                  <div className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                    Quick Links
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </div>
                  {/* Dropdown links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-900 shadow-md mt-2 p-2 dark:text-white">
                    <ul className="space-y-2 py-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <Link
                            className="block px-4 py-2 text-gray-500 hover:text-black dark:hover:text-white duration-200 w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            to={data.link}
                          >
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
                aria-label="Search"
              />
              <IoMdSearch
                className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/3 -translate-y-1/3 right-1 duration-200"
              />
            </div>

            {/* Cart button section */}
            <Link to="/cart" className="relative p-3" aria-label="Shopping Cart">
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 left-3 flex items-center justify-center text-xs">
                {cartItems.length}
              </div>
            </Link>

            {/* Login button */}
            <Link to="/login">
              <button className="px-4 py-2 bg-phlox text-white rounded-md hover:bg-purple-700 transition duration-200">
                Login
              </button>
            </Link>

            {/* Dark mode section */}
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
