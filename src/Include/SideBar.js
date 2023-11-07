import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsArrow90DegRight,
  BsArrowLeft,
  BsArrowRight,
  BsBook,
  BsDashSquareDotted,
  BsList,
} from "react-icons/bs";
import { Bars } from "./NavbarElements";
import {
  MdArrowCircleLeft,
  MdDashboard,
  MdEdit,
  MdKeyboardArrowRight,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import {
  FaEdit,
  FaMonument,
  FaPowerOff,
  FaUniversity,
  FaUser,
} from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { SiConcourse } from "react-icons/si";
import { LuLogOut } from "react-icons/lu";
import user from "../assets/img/segni.jpg";

export const SideBar = ({ children }) => {
  const [open, setOpen] = useState(0);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  const [opensidebar, setopensidebar] = useState(true);

  const menus = [
    {
      Icon: <MdDashboard />,
      name: "Home",
      path: "/acounthome",
    },
    {
      Icon: <BsBook />,
      name: "Courses",
      path: "/courses",
    },
    {
      Icon: <PiExam />,
      name: "Exams",
      path: "/exams",
    },
    {
      Icon: <FaUniversity />,
      name: "Scholarship",
      path: "/scholarship",
    },
    {
      Icon: <FaUser />,
      name: "User Profile",
      path: "/userProfil",
    },
    {
      Icon: <FaPowerOff />,
      name: "Logout",
      path: "/logout",
    },
  ];
  return (
    <div className="flex w-full ">
      <div
        className={` text-white bg-bg-pri fixed top-0 left-0 h-screen  ${
          !opensidebar ? "w-20 duration-500" : "w-56 duration-500"
        } `}
      >
        <div
          className={`mb-4 text-xl font-bold grid pt-10 relative pl-2 ${
            !opensidebar && "pl-0"
          }`}
        >
          <Link>
            <img
              className={`w-16 h-16 rounded-full mx-auto ${
                !opensidebar && "w-8 h-8 border pl-0"
              }`}
              src={user}
            />{" "}
            {/* <FaEdit className={`absolute right-1/3 top-16 `} /> */}
          </Link>
          <span className={`${!opensidebar && "hidden"} mx-auto `}>
            abinesilew
          </span>

          <hr className={`mt-3 mr-3 ${!opensidebar && "hidden"}`} />
          <MdOutlineArrowForwardIos
            className={` absolute mt-10 -right-4  text-bg-fou font-extrabold bg-bg-sec  rounded-full text-4xl duration-300  ${
              !opensidebar
                ? "  rotate-[360deg] mt-2 duration-300 "
                : "rotate-180"
            }`}
            onClick={() => setopensidebar(!opensidebar)}
          />
        </div>
        <ul>
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`mb-2 hover:bg-[#ffffff] hover:text-black hover:duration-300 p-3  ml-5 font-bold ${
                !opensidebar && "ml-2"
              }`}
            >
              <div
                className={`cursor-pointer flex items-center ${
                  !opensidebar && "text-3xl "
                }`}
                onClick={() => handleMenuClick(index)}
              >
                {menu.Icon}
                <Link to={menu.path}>
                  <span className={`ml-2 ${!opensidebar && "hidden"}`}>
                    {menu.name}
                  </span>
                </Link>
                {menu.submenu && (
                  <span className={`ml-auto ${!opensidebar && "hidden"}`}>
                    {activeMenu === index ? "▲" : "▼"}
                  </span>
                )}
              </div>
              {menu.submenu && activeMenu === index && (
                <ul className="ml-4  rounded text-[#0b141d] duration-300 cursor-pointer">
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li key={subIndex} className="mb-2">
                      {submenuItem.Icon}
                      <span className={`ml-2 ${!opensidebar && "hidden"}`}>
                        {submenuItem.name}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={` duration-500 w-full  ${!opensidebar ? "ml-20" : "ml-56"}`}
      >
        {children}
      </div>
    </div>
  );
};
