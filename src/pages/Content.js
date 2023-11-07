import React, { useState } from "react";
import { ANavbar } from "./Acountnavbar";
import {
  AiOutlineFileText,
  AiOutlinePlayCircle,
  AiOutlineProfile,
} from "react-icons/ai";
import {
  FaBook,
  FaVideo,
  FaPen,
  FaPlayCircle,
  FaFileAlt,
  FaCaretDown, // Dropdown icon
  FaCaretRight,
  FaFilePdf, // Icon when dropdown is open
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { Disclosure } from "@headlessui/react";
import { BsBookmarkDashFill, BsChevronDown } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { PiExamBold, PiExamLight } from "react-icons/pi";
import { LuVideo } from "react-icons/lu";
export const Content = ({ items }) => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      id: 1,
      icon: <FaBook />,
      text: "Module 1",
      items: [
        {
          id: 11,
          text: "workbook",
          icon: <BsBookmarkDashFill />,
          items: [
            { id: 72, text: "xxxxx.pdf", icon: <FaFilePdf />, eneable: true },
            // { id: 32, text: "xxxxx.pdf", icon: <FaFilePdf /> ,},
          ],
        },
        {
          id: 22,
          text: "Video",
          icon: <FaVideo />,
          items: [
            { id: 21, text: "Vedio 1", icon: <LuVideo /> },
            { id: 31, text: "Vedio 2", icon: <LuVideo /> },
            { id: 41, text: "Vedio 3", icon: <LuVideo /> },
            { id: 51, text: "Vedio 4", icon: <LuVideo /> },
          ],
        },
        {
          id: 33,
          text: "Quiz",
          icon: <PiExamBold />,
          items: [
            { id: 23, text: "xxxxx.pdf", icon: <PiExamLight /> },
            { id: 33, text: "xxxxx.pdf", icon: <PiExamLight /> },
            { id: 43, text: "xxxxx.pdf", icon: <PiExamLight /> },
            { id: 53, text: "xxxxx.pdf", icon: <PiExamLight /> },
          ],
        },
      ],
    },
    {
      id: 2,
      icon: <FaBook />,
      text: "Module 2",
      items: [
        {
          id: 100,
          text: "workbook",
          icon: <BsBookmarkDashFill />,
          items: [
            { id: 102, text: "xxxxx", icon: <FaFilePdf /> },
            { id: 103, text: "xxxxx", icon: <FaFilePdf /> },
            { id: 104, text: "xxxxx", icon: <FaFilePdf /> },
            { id: 105, text: "xxxxx", icon: <FaFilePdf /> },
          ],
        },
        {
          id: 24,
          text: "Video",
          icon: <FaVideo />,
          items: [
            { id: 110, text: "Vedio 1", icon: <LuVideo /> },
            { id: 113, text: "Vedio 2", icon: <LuVideo /> },
            { id: 114, text: "Vedio 3", icon: <LuVideo /> },
            { id: 115, text: "Vedio 4", icon: <LuVideo /> },
          ],
        },
        {
          id: 40,
          text: "Quiz",
          icon: <PiExamBold />,
          items: [
            { id: 120, text: "xxxxx", icon: <PiExamLight /> },
            { id: 121, text: "xxxxx", icon: <PiExamLight /> },
            { id: 123, text: "xxxxx", icon: <PiExamLight /> },
            { id: 124, text: "xxxxx", icon: <PiExamLight /> },
          ],
        },
      ],
    },
  ];
  const [openpdf, setpdf] = useState(false);
  const [openvedio, setvideo] = useState(false);
  const [openquiz, setQuiz] = useState(false);
  const toggleDropdown = (itemId) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [itemId]: !prevOpen[itemId],
    }));
  };
  const renderDropdown = (items, level = 2) => {
    return (
      <ul className={`pl-${level * 4} `}>
        {items.map((item) => (
          <li key={item.text}>
            <button
              onClick={() => toggleDropdown(item.id)}
              className="w-full py-2 px-4 text-left text-sm flex items-center"
            >
              {open ? <FaCaretRight className="" /> : <FaCaretDown />}
              {item.icon}
              <span
                onClick={() => setpdf(true)}
                className={`ml-2 hover:text-bg-ter  ${
                  open[items] ? " font-bold" : ""
                } `}
              >
                {item.text}
              </span>
            </button>
            {open[item.id] &&
              item.items &&
              renderDropdown(item.items, level + 2)}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <ANavbar>
      <div className="flex ">
        <div className="w-64 bg-bg-fou h-screen">
          <ul className="p-4 text-bg-pri ">
            {navItems.map((item) => (
              <li key={item.text} className=" text-2xl">
                <button
                  onClick={() => toggleDropdown(item.id)}
                  className="w-full py-2 px-4 text-left text-sm flex items-center"
                >
                  {open[item.id] ? <FaCaretRight /> : <FaCaretDown />}
                  {item.icon}
                  <span className="ml-2 hover:text-bg-ter font-extrabold">
                    {item.text}
                  </span>
                </button>
                {open[item.id] && item.items && renderDropdown(item.items, 1)}
              </li>
            ))}
          </ul>
        </div>
        <div className={`bg-bg-ter h-[600px] w-full mx-auto mt-10 `}></div>
        <div
          className={`bg-bg-pri h-[600px] w-full mx-auto mt-10 hidden`}
        ></div>
        <div
          className={`bg-bg-sec h-[600px] w-full mx-auto mt-10 hidden`}
        ></div>
      </div>
    </ANavbar>
  );
};
