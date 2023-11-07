import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Footer from "./Footer";
import * as Ai from "react-icons/ai";
import { InputText } from "primereact/inputtext";
import { HashLink as Link } from "react-router-hash-link";

export const Navbars = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignup, setSignup] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };
  const opensignup = () => {
    setSignup(true);
  };
  const closesignup = () => {
    setSignup(false);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const opensignClodeLogin = () => {
    setIsOpen(false);
    setSignup(true);
  };
  const openloginclosesignup = () => {
    setIsOpen(true);
    setSignup(false);
  };
  return (
    <>
      <Nav className="w-screen overflow-scroll-none bg-bg-pri">
        <NavLink to="/">
          <img alt="logo" className="" />
        </NavLink>
        <Bars />
        <NavMenu className="">
          <Link
            to="/"
            activeStyle
            className="text-white hover:text-cyan-400 font-bold mr-5"
            smooth
          >
            Home
          </Link>
          <Link
            to="#about"
            className="text-white hover:text-cyan-400 font-bold mr-5"
            smooth
          >
            About
          </Link>
          <Link
            to="#services"
            className="text-white hover:text-cyan-400 font-bold mr-5"
            smooth
          >
            Services
          </Link>
          <Link
            to="#contact"
            className="text-white hover:text-cyan-400 font-bold mr-5"
            smooth
          >
            Contact Us
          </Link>
          {/* <Link to="/trainings"  className="text-white hover:text-cyan-400 font-bold">
            Trainings
          </Link> */}
          <Link
            to="#posts"
            className="text-white hover:text-cyan-400 font-bold mr-4"
            smooth
          >
            Posts
          </Link>
          <Link
            to="/training"
            className="text-white hover:text-cyan-400 font-bold mr-4"
            smooth
          >
            Training
          </Link>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={openPopup} className="outline-white">
            Sign In
          </NavBtnLink>
          <NavBtnLink onClick={opensignup}>Sign up</NavBtnLink>
        </NavBtn>
      </Nav>
      {children}
      {/* <Footer /> */}
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom h-[500px] w-[200px] bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <Ai.AiOutlineClose
                    className="text-white text-xl justify-end ml-[430px]"
                    onClick={closePopup}
                  />
                </div>

                <div className="mt-20 items-center first-letter:text-center sm:mt-0  sm:text-center text-white w-full">
                  <div className="mt-10 w-[400px]]">
                    <div className="flex items-center justify-center ">
                      <div className="  rounded-lg w-screen p-8 space-y-4">
                        <h2 className="text-2xl font-bold text-center mb-10">
                          Login
                        </h2>
                        <div className="relative ">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <i className="material-icons text-white">
                              <Ai.AiFillMail />
                            </i>
                          </span>
                          <input
                            type="text"
                            className="block w-full pl-12 border rounded-lg py-2 px-3 focus:ring focus:ring-indigo-300 focus:outline-none bg-transparent"
                            placeholder="Email"
                          />
                        </div>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <i className="material-icons text-white">
                              <Ai.AiFillLock />
                            </i>
                          </span>
                          <input
                            type="password"
                            className="block w-full pl-12 border rounded-lg py-2 px-3 focus:ring focus:ring-indigo-300 focus:outline-none bg-transparent"
                            placeholder="Password"
                          />
                          <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <i className="material-icons text-white">
                              <Ai.AiFillEye />
                            </i>
                          </span>
                        </div>
                        <Link className="ml-[240px] text-[#1A7FC1] mt-5 right-0 pr-5">
                          Forgot Password?
                        </Link>
                        <button className="block w-1/2 mx-auto  bg-blue-500 text-white rounded-lg py-2 ">
                          Login
                        </button>
                        <span className="text-white ">
                          Don't have an Account?{" "}
                          <Link
                            onClick={opensignClodeLogin}
                            className="text-[#1A7FC1] font-extrabold cursor-pointer"
                          >
                            Sign Up
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"></div>
            </div>
          </div>
        </div>
      )}

      {isSignup && (
        <div className=" absolute top-5 w-full bg-transparent">
          <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
            <div
              className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
              style={{ maxWidth: 1000 }}
            >
              <div className="md:flex w-full">
                <div className="hidden md:block w-1/4 text-white bg-gray-900 py-10 px-10">
                  LOGO
                </div>
                <div className="w-full md:w-4/5 py-10 px-5 md:px-10">
                  {" "}
                  <Ai.AiOutlineClose
                    className="ml-[600px] mt-0 text-2xl  font-extrabold cursor-pointer"
                    onClick={closesignup}
                  />
                  <div className="text-center mx-auto mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">
                      REGISTER
                    </h1>
                    <p>Enter your information to register</p>
                  </div>
                  <div>
                    <div className="flex -mx-3 ">
                      <div className="w-1/2 px-3 mb-5">
                        <label htmlFor className="text-xs font-semibold px-1">
                          First name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="text"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="John"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 px-3 mb-5">
                        <label htmlFor className="text-xs font-semibold px-1">
                          Middle name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="text"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Smith"
                          />
                        </div>{" "}
                      </div>
                      <div className="w-1/2 px-3 mb-5">
                        <label htmlFor className="text-xs font-semibold px-1">
                          Last name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="text"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="John"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label htmlFor className="text-xs font-semibold px-1">
                          Email
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="email"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="johnsmith@example.com"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 mb-5">
                        <label htmlFor className="text-xs font-semibold px-1">
                          Username
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="email"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="username"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-12">
                        <label htmlFor className="text-xs font-semibold px-1">
                          Password
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="password"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="************"
                          />
                        </div>
                      </div>{" "}
                      <div className="w-full px-3 mb-12">
                        <label htmlFor className="text-xs font-semibold px-1">
                          Retype-Password
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="password"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="************"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <button className="block w-full max-w-xs mx-auto bg-cyan-600 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                          REGISTER NOW
                        </button>{" "}
                        <span className="text-black ml-[250px] font-bold">
                          Have an Account?{" "}
                          <Link
                            onClick={openloginclosesignup}
                            className="text-[#1A7FC1] font-extrabold cursor-pointer"
                          >
                            sign In
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
        </div>
      )}
    </>
  );
};
