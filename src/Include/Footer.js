import React from "react";
import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const contact = [
    { icon: <Ai.AiFillHome />, value: "Addis Abeba, Bole" },
    { icon: <Ai.AiFillMessage />, value: "Apex@gmail.com" },
    { icon: <Ai.AiFillHome />, value: "+25193294857" },
    { icon: <Ai.AiFillMail />, value: "+25193294858" },
  ];
  const Links = [
    { icon: <Ai.AiOutlineHome />, value: "Home", hash: "#Home" },
    { icon: <Ai.AiFillMessage />, value: "About", hash: "#login" },
    { icon: <Ai.AiFillHome />, value: "Service" },
    { icon: <Ai.AiFillMail />, value: "Contact" },
    { icon: <Ai.AiFillMail />, value: "Post" },
  ];
  const social = [
    { icons: <Ai.AiFillFacebook /> },
    { icons: <Ai.AiFillInstagram /> },
    { icons: <Bs.BsTelegram /> },
  ];
  return (
    <>
      <div
        className="py-10 text-center md:text-left  bg-slate- w-full mx-auto"
        id="contact"
      >
        <div className="grid-1 grid  md:grid-cols-3 lg:grid-cols-3">
          {/* Tailwind Elements section */}
          <div className="lg:ml-20 sm:grid ">
            <h6 className="mb-4 flex items-center justify-center  uppercase md:justify-start font-extrabold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Apex Consultancy
            </h6>
            {Links.map((i, k) => {
              return (
                <Link
                  className="mb-4 ml-7 flex items-center justify-center md:justify-start"
                  key={k.icon}
                >
                  {i.value}
                </Link>
              );
            })}
          </div>

          {/* Contact section */}
          <div className="left-[200px]">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>

            {contact.map((i, k) => {
              return (
                <p
                  className="mb-4 flex items-center justify-center md:justify-start"
                  key={k.icon}
                >
                  <span className="text-[22px] mr-3 "> {i.icon}</span> {i.value}
                </p>
              );
            })}
          </div>
          <div className=" ">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Social Media
            </h6>
            <div className="flex mt-0">
              {social.map((i, k) => {
                return (
                  <Link className="mr-6 text-black text-xl ">{i.icons}</Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-5 text-center text-white  bg-slate-900 w-full">
          &copy; 2023 Copyright Apex Consultancy
        </div>
      </div>
    </>
  );
}

export default Footer;
