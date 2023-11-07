import React, { useState } from "react";
import pro from "../assets/img/pic-2.jpg";

import { IoIosArrowDropdown } from "react-icons/io";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineProfile,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

export const ANavbar = ({ children }) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  const navItem = [
    {
      id: 1,
      icon: <AiOutlineProfile />,
      text: "Meti",
      path: "/",
      image: true,
      img: pro,
    },
    {
      id: 2,
      icon: <AiOutlineProfile />,
      text: "Logout",
      path: "/",
    },
  ];
  // Array containing navigation items
  const navItems = [
    { id: 1, icon: <AiOutlineProfile />, text: "Home", path: "/acounthomee" },
    {
      id: 2,
      icon: <AiOutlineProfile />,
      text: "Courses",
      submenustatus: true,
      submenu: [
        {
          id: 21,
          text: "My Course",
          path: "/mycourses",
        },
        {
          id: 22,
          text: "All Courses",
          path: "/ourcourses",
        },
        // Add more courses as needed
      ],
    },
    { id: 3, icon: <AiOutlineProfile />, text: "Exams", path: "/Exams" },
    {
      id: 4,
      icon: <AiOutlineProfile />,
      text: "Scholarship",
      path: "/scholarship",
    },
  ];

  return (
    <>
      <div className="bg-bg-pri flex  items-center h-24 w-full me-auto px-4  text-white ">
        {/* Logo */}
        <h1 className=" text-3xl font-bold text-bg-sec ">Apexlogo</h1>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex mx-auto text-center font-bold ml-96">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="group relative p-5 hover:text-bg-ter rounded-full m-2 cursor-pointer duration-300 "
            >
              {" "}
              <Link to={item.path}>{item.text}</Link>
              <span className="ml-2">
                {item.submenustatus ? (
                  // Use the IoIosArrowDropdown icon for the dropdown indicator
                  <IoIosArrowDropdown className="w-5 h-5 inline transition-transform duration-300 transform group-hover:rotate-180" />
                ) : null}
              </span>
              {item.submenu && (
                <ul className="hidden group-hover:block w-[120px] absolute left-0 top-full rounded-b-lg bg-bg-pri shadow-lg duration-1000 ease-in-out">
                  {item.submenu.map((subItem) => (
                    <Link to={subItem.path} key={subItem.id}>
                      <li className="px-4 py-2 hover:bg-gray-100 w-[120px] rounded-b-lg">
                        {subItem.text}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden sm:visible">
          {nav ? (
            <AiOutlineClose size={20} className="ml-52" />
          ) : (
            <AiOutlineMenu size={20} className="ml-52" />
          )}
        </div>
        <ul className="hidden md:flex lg:ms-auto   text-center font-bold ">
          {navItem.map((item) => (
            <Link to={item.path}>
              {" "}
              <li
                key={item.id}
                className=" p-3 hover:bg-bg-ter rounded-full m-2 cursor-pointer duration-300 flex text-center items-center hover:text-black"
              >
                {item.image ? (
                  <img
                    src={item.img}
                    className="w-6 h-6 rounded-full mr-2 items-center"
                  />
                ) : (
                  <FaPowerOff className="mr-2" />
                )}
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-bg-pri ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-bg-sec m-4">Apex</h1>
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <Link to={item.path}>
              <li
                key={item.id}
                className="p-4 border-b flex rounded-xl hover:bg-bg-ter duration-300 hover:text-black cursor-pointer border-gray-600"
              >
                <span className="text-2xl mr-2"> {item.icon}</span>
                {item.text}
              </li>
            </Link>
          ))}{" "}
          <div className="top-[500px] absolute w-full border-none">
            {navItem.map((item) => (
              <Link to={item.path}>
                <li
                  key={item.id}
                  className="p-4 flex border-none rounded-xl hover:bg-bg-ter duration-300 hover:text-black cursor-pointer border-gray-600"
                >
                  <span className="text-2xl mr-2"> {item.icon}</span>
                  {item.text}
                </li>
              </Link>
            ))}
          </div>
        </ul>
      </div>
      <div className="overflow-y-auto scrollbar-hide w-full mx-auto">
        {children}
      </div>
    </>
  );
};
