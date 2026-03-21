

import { Link, useLocation } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navlink = [
    {
      id: "1",
      link: "/about",
      title: "About"
    },
    {
      id: "2",
      link: "/skills",
      title: "Skills"
    },
    {
      id: "3",
      link: "/education",
      title: "Education"
    },
    {
      id: "4",
      link: "/contact",
      title: "Contact Me"
    },
  ]

  return (
    <div className="w-full bg-richblue-500 border-b border-richblack-700">

      <div className="flex items-center justify-between w-11/12 max-w-maxContent mx-auto h-12">

        <Link to="/">
          <IoHome className="text-richblack-5 text-xl hover:text-richblack-100 transition-all duration-200" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex mx-auto flex-row justify-between items-center">
          <ul className="flex flex-row gap-x-5 items-center justify-center font-inter font-medium">
            {
              navlink.map((item, index) => (
                <li key={index}
                  className={location.pathname === item.link
                    ? "text-richblack-5 bg-[#081b29] rounded-t-lg px-3 mt-4 pb-2 py-1 hover:text-richblack-100 transition-all duration-300"
                    : "text-richblack-5 px-2 hover:text-richblack-100 transition-all duration-300"}
                >
                  <Link to={item.link}>
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <button className="border-2 border-cyan-600 bg-gray-50 text-richblack-900 font-semibold px-5 py-1 rounded-md hover:bg-gray-200 transition-all duration-200">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-cyan-500 border-2 border-cyan-600 text-richblack-5 px-5 py-1 rounded-md font-semibold hover:bg-cyan-400 transition-all duration-200 shadow-md">
              SignUp
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-richblack-5 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-richblue-500 border-t border-richblack-700 w-11/12 mx-auto pb-4">
          <ul className="flex flex-col gap-y-2 font-inter font-medium mt-2">
            {
              navlink.map((item, index) => (
                <li key={index}
                  className={location.pathname === item.link
                    ? "text-richblack-5 bg-[#081b29] rounded-lg px-3 py-2 hover:text-richblack-100 transition-all duration-300"
                    : "text-richblack-5 px-3 py-2 hover:text-richblack-100 transition-all duration-300"}
                  onClick={() => setMenuOpen(false)}
                >
                  <Link to={item.link}>
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))
            }
          </ul>

          <div className="flex flex-col gap-3 mt-4 px-3">
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full border-2 border-cyan-600 bg-gray-50 text-richblack-900 font-semibold px-5 py-1 rounded-md hover:bg-gray-200 transition-all duration-200">
                Login
              </button>
            </Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-cyan-500 border-2 border-cyan-600 text-richblack-5 px-5 py-1 rounded-md font-semibold hover:bg-cyan-400 transition-all duration-200 shadow-md">
                SignUp
              </button>
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}