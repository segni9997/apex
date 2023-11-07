import React, { useState } from "react";
import { SideBar } from "../Include/SideBar";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import img from "../assets/img/pic-9.jpg";
import img1 from "../assets/img/pic-2.jpg";
import * as Ai from "react-icons/ai";
import Cbe from "../assets/img/cbe-logo.jpg";
import Cbebirr from "../assets/img/Cbebirr.jpg";
import telebirr from "../assets/img/telebirr.jpg";
import { LuArrowLeft } from "react-icons/lu";
import { FaClosedCaptioning } from "react-icons/fa";
import { ANavbar } from "./Acountnavbar";

export const CourseDescripton = () => {
  const [openpay, setpay] = useState(false);
  return (
    <>
      {openpay ? (
        <div className="flex items-center justify-center h-screen bg-bg-pri">
          <form className=" p-4 shadow-md bg-bg-fou rounded-lg w-[700px] h-[450px]">
            {" "}
            <Link
              onClick={() => setpay(false)}
              className="flex text-bg-pri font-bold  w-24 p-2 items-center rounded-full  "
            >
              {" "}
              <Ai.AiFillCloseCircle className="  text-bg-pri -left-4 top-1 text-3xl mr-2" />{" "}
              Close
            </Link>
            <div className="text-bg-pri text-2xl font-extrabold mt-5 mx-auto ">
              <div className="grid bg-bg-fou rounded-xl p-5 mx-auto">
                <span className="mx-auto text-center  w-full">
                  Payment Method
                </span>{" "}
                <div className="mt-5 flex bg-[#0024] p-3 rounded">
                  <img
                    src={Cbe}
                    className="w-12 h-12 rounded-full mx-auto cursor-pointer"
                  />
                  <img
                    src={Cbebirr}
                    className="w-12 h-12 rounded-full mx-auto cursor-pointer"
                  />
                  <img
                    src={telebirr}
                    className="w-12 h-12 rounded-full mx-auto cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="relative mb-5 mt-10">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <i className="material-icons text-white">
                  <Ai.AiFillBank className="text-2xl text-bg-pri" />
                </i>
              </span>
              <input
                type="text"
                className="block w-full pl-12 border border-bg-pri text-bg-pri rounded-lg py-2 px-3 focus:ring focus:ring-bg-pri focus:outline-none bg-transparent text-xl placeholder:text-bg-pri"
                placeholder="Type Tnx ID ex.ADDXXXXXXXXXX"
              />
            </div>
            <div className="border w-1/2 mx-auto">
              {" "}
              <button
                type="submit"
                className="bg-bg-ter w-full hover:bg-transparent border border-bg-ter text-white font-bold py-2 px-4 rounded-full  justify-center items-center"
              >
                Check
              </button>
            </div>
          </form>
        </div>
      ) : (
        <ANavbar>
          <div
            className="h-80 relative "
            style={{
              background: 'url("../assets/img/blackbackground.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-bg-pri to-transparent opacity-100" />

            <div className="absolute inset-0 flex items-center justify-center text-bg-fou text-2xl font-semibold">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-l from-bg-fou font-extrabold to-bg-pri opacity-100 ">
                  Course 1
                </h1>
                <p className="mt-4">Br.750</p>
                <div className="mt-10 grid">
                  <button
                    onClick={() => setpay(!openpay)}
                    className="bg-bg-ter text-lg text-bg-pri border-bg-ter hover:bg-transparent border hover:border-bg-ter hover:text-bg-fou  font-bold w-full py-3 rounded-[40px]"
                  >
                    Enroll Now
                  </button>

                  <p className="text-bg-fou mt-2">700 already enrolled</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="lg:flex sm:grid justify-center items-center lg:h-52 mt-16 bg-gradient-b from-bg-pri shadow-slate-500 shadow-2xl lg:w-[calc(100%-200px)] mx-auto bg-bg-pri text-bg-fou p-4 rounded-lg  ">
              <div className=" p-10 rounded-md mx-auto grid ">
                <p className="flex space-x-1 ">
                  <span className="text-xl mr-3 "> 4.7</span>
                  <BsStarFill className="text-[25px] text-bg-sec" />
                </p>
                <p className="text-bg-fou">(785 reviews)</p>
              </div>

              <div className=" lg:p-10 rounded-md lg:mx-auto grid ">
                <p className="flex space-x-1 ">
                  {" "}
                  <span className="text-xl lg:mr-3 mx-auto">
                    {" "}
                    Approx. 40 hours to complete
                  </span>
                </p>
                <p className="text-bg-fou mx-auto"> 3 weeks at 13 per week</p>
              </div>
              {/* <div className="  ">
            <p className="text-gray-300 text-8xl font-light">|</p>
          </div>
          <div className=" p-10 rounded-md w-[200px]">
            <p className="text-bg-pri">This is a flex div.</p>
          </div> */}
            </div>
          </div>
          <div className="w-full bg-white h-96 mt-10 mx-auto sm:ml-0 sm:pl-0 ">
            <div className="p-10">
              <span className="text-4xl font-bold text-bg-pri">
                About The Course
              </span>
            </div>
            <div className="flex  sm:grid-cols-1 sm:w-full lg:space-x-4  w-full  sm:grid lg:p-5">
              <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:m-2    w-full ">
                <div className="grid grid-cols-1 border border-bg-sec shadow-2xl shadow-bg bg-bg-pri text-bg-fou  rounded-lg">
                  <h1 className="p-4 text-2xl font-bold">Course Content</h1>
                  <div className=" p-10 rounded-md  grid ">
                    <p className="flex space-x-1 ">
                      {" "}
                      <span className="text-xl mr-3 me-auto"> Content 1</span>
                    </p>
                    <p className=" me-auto"> 8 hr to complete</p>
                  </div>
                  <hr className="text-2xl ml-4 mr-4 font-bold text-bg-pri " />
                  <div className=" p-10 rounded-md me-auto grid ">
                    <p className="flex space-x-1 ">
                      {" "}
                      <span className="text-xl mr-3 me-auto"> Content 2</span>
                    </p>
                    <p className=" me-auto"> 11 hr to complete</p>
                  </div>
                  <hr className="text-2xl ml-4 mr-4 font-bold text-bg-pri " />

                  <div className=" p-10 rounded-md me-auto grid ">
                    <p className="flex space-x-1 ">
                      {" "}
                      <span className="text-xl mr-3 me-auto"> Content 3</span>
                    </p>
                    <p className=" me-auto"> 7 hr to complete</p>
                  </div>
                  <hr className="text-2xl ml-4 mr-4 font-bold text-bg-pri " />
                  <div className=" p-10 rounded-md  grid ">
                    <p className="flex space-x-1 ">
                      {" "}
                      <span className="text-xl mr-3 me-auto"> Content 4</span>
                    </p>
                    <p className=" me-auto"> 5 hr to complete</p>
                  </div>
                </div>

                <div className=" lg:ml-16 h-min rounded-lg border border-bg-sec shadow-2xl shadow-bg-pri bg-bg-pri  text-bg-fou ">
                  <h1 className="p-4 text-2xl font-bold">Instructors</h1>
                  <div className="flex p-10 rounded-md   ">
                    <img src={img} className="w-12 h-12 rounded-full" />
                    <p className="text-bg-fou me-auto ml-3 font-bold grid">
                      {" "}
                      <h3> Abenezer Sileshi</h3>
                      <p className="flex space-x-1 ">
                        <span className="text-xl mr-3"> 4.7</span>
                        <BsStarFill className="text-[25px] text-bg-sec" />
                      </p>
                    </p>
                  </div>{" "}
                  <hr className="text-2xl ml-4 mr-4 font-bold text-bg-fou " />
                  <div className="flex p-10 rounded-md   ">
                    <img src={img1} className="w-12 h-12 rounded-full" />
                    <p className="text-bg-fou me-auto ml-3 font-bold grid">
                      {" "}
                      <h3> Meti Asrat</h3>
                      <p className="flex space-x-1 ">
                        <span className="text-xl mr-3"> 4.5</span>
                        <BsStarFill className="text-[25px] text-bg-sec" />
                      </p>
                    </p>
                    <hr className="text-2xl ml-4 mr-4 font-bold text-bg-fou " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ANavbar>
      )}
    </>
  );
};
