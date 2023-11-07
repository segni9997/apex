import React, { useState } from "react";
import { Navbars } from "./Navbars";
import banner1 from "../assets/img/main-banner .jpg";
import back2 from "../assets/img/kjbg (1) 1.jpg";
import whoweare from "../assets/img/businessman-2606506_1920.jpg";
import * as FAIcon from "react-icons/fa";
import * as LiaIcon from "react-icons/lia";
import * as GaIcon from "react-icons/gi";
import * as Tb from "react-icons/tb";
import * as Si from "react-icons/si";
import * as Sl from "react-icons/sl";
import * as Pi from "react-icons/pi";
import * as Md from "react-icons/md";
import * as Lu from "react-icons/lu";
import * as Tfi from "react-icons/tfi";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "../assets/css/style.css";

export const Home = () => {

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      heading: "Apex is going Up",
      message:
        "Apex ApexApex ApexApexApexApexApexApexApex ApexApexApe xApexAp  ",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      heading: "Apex is going Up",
      message:
        "Apex ApexApex ApexApexApexApexApexApexApex ApexApexApe xApexAp exApexApex ",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      heading: "Apex is going Up",
      message:
        "Apex ApexApex ApexApexApexApexApexApexApex ApexApexApe xApexAp exApexApex ",
    },

    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",

      heading: "Apex is going Up",
      message:
        "Apex ApexApex ApexApexApexApexApexApexApex ApexApexApe xApexAp exApexApex ",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      heading: "Apex is going Up",
      message:
        "Apex ApexApex ApexApexApexApexApexApexApex ApexApexApe xApexAp exApexApex ",
    },
  ];

  const services = [
    {
      name: "Training",
      icon: <LiaIcon.LiaChalkboardTeacherSolid />,
      message: "Video, Podcast..",
    },
    {
      name: "Consult",
      icon: <FAIcon.FaPeopleArrows />,
      message: "Consult that will help you a lot",
    },
    {
      name: "Coaching",
      icon: <GaIcon.GiTabletopPlayers />,
      message: "Coaching that will help you a lot",
    },
    {
      name: "Mock interview",
      icon: <Sl.SlSpeech />,
      message: "Help scholarship applicants prepare for the actual interview",
    },
    {
      name: "Essay ",
      icon: <Tfi.TfiWrite />,
      message: "writing, Editing , sample",
    },
    {
      name: "University Application Links ",
      icon: <FAIcon.FaLink />,
    },
    {
      name: "Visa ",
      icon: <FAIcon.FaCcVisa />,
      message: "Interview Assistance, Interview Transcript ",
    },
    {
      name: "International exam assistance ",
      icon: <Pi.PiExamBold />,
      message: "SAT, TOEFL, IELTS...",
    },
    {
      name: "Goal setting guidance ",
      icon: <Lu.LuGoal />,
    },
    {
      name: "Work Book ",
      icon: <Lu.LuBookOpenCheck />,
      message: "Checklist, Notes, Template, plan...",
    },
    { name: "Continuos Assessment ", icon: <FAIcon.FaRegQuestionCircle /> },
    { name: "Campus Tour ", icon: <Md.MdOutlineTour /> },
  ];
  const Choose = [
    {
      name: "Maximizing scholarship opportunities",
      Icon: <Tb.TbStairsUp />,
      msg: "Strategies and Requirements",
    },
    {
      name: "Mastering the scholarship applications",
      Icon: <Si.SiGooglescholar />,
      msg: "key steps for international students",
    },
    {
      name: "Navigating the university experiences",
      Icon: <FAIcon.FaUniversity />,
      msg: "A guide for international students ",
    },
    {
      name: "Essential steps for international students",
      Icon: <Pi.PiStudentLight />,
      msg: "From University Application to Visa ",
    },
  ];

  return (
    <Navbars className="">
      <div className="w-screen h-960 realtive ">
        <div class="absolute top-[400px] left-70 px-4 py-3 ">
          <span className="text-white ">
            <h1 class="sm:absolute text-[#45C4E9] font-bold text-9xl md:text-8xl sm:text-xs">
              {" "}
              Apex Consultancy
            </h1>{" "}
          </span>
        </div>
        <img src={banner1} className="  w-screen bg-center bg-cover h-5/6" />
      </div>

      {/* who are wee */}
      <div className="w-screen h-960 bg-white  relative sm:block  " id="about">
        {" "}
        <div
          id="#login"
          className="absolute lg:top-[100px] left-72 bg-slate-200 rounded-2xl h-[400px] sm:w-[100px] lg:w-[600px] 2xl:w-[1000px]  md:w-1/3"
        >
          <div className="" id="a">
            <p className=" lg:h-[600px] w:full mt-5  flex flex-1 mr-10">
              <img
                src={whoweare}
                className="w-1/3  lg:h-[300px] rounded-2xl mt-12 ml-5"
              />{" "}
              <div className="ml-10 mt-0 ">
                <h1 className="  text-4xl mt-3 justify-center  items-center font-semibold mb-10 text-cyan-400">
                  Who We Are ?
                </h1>
                <p className="text-[16px]  mt-0">
                  Apex Consultancy is a program that assists high school
                  graduates in their college applications. We provide guidelines
                  and necessary details to ensure that students have a smooth
                  and successful application process. Our services include
                  helping students with their personal statements, identifying
                  suitable colleges, and providing guidance on standardized
                  tests such as the SAT and ACT. Additionally, we offer advice
                  on scholarships and financial aid to help students achieve
                  their academic goals. At Apex Consultancy, we strive to
                  empower students by providing them with the tools and
                  resources they need to succeed in their college applications
                </p>
                {/* <button className="outline outline-2 outline-none  outline-offset-2 ... w-48 mt-3 ml-60 bg-cyan-400 font-bold text-white text-2xl rounded-2xl h-10">
                  More...
                </button> */}
              </div>
            </p>
          </div>
        </div>
        <img
          src={back2}
          className="  lg:w-screen bg-center bg-cover h-fit sm:h-max"
        />
        {/* service provide */}
        <div
          className="relative bg-slate-900 md:w-screen h-[1100px] "
          id="services"
        >
          <div className=" absolute w-52 h-4 top-[100px] left-[500px] bg-sky-500 mb-5 "></div>
          <div className=" absolute  md:w-auto h-50  mr-10 font-bold  top-[100px]  text-white mt-10 ">
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl  mr-[100px] text-white lg:mx-[450px] ">
              Services We Provide For Customer
            </h1>
            <div className="mt-10 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3 m-10">
              {services.map((index, key) => {
                return (
                  <div>
                    <div
                      key={key.name}
                      className="flex items-center p-10 border border-cyan-500 text-white ml-[10px] rounded-lg shadow-xs"
                    >
                      <div className="p-3 mr- rounded-full ">
                        <p className="w-10 h-10 justify-center text-5xl text-[#45C4E9]">
                          {index.icon}
                        </p>
                      </div>
                      <div>
                        <p className="mb-2 ml-5 text-white text-xl font-bold">
                          {index.name}
                        </p>
                        <p className="text-xs ml-5 text-white">
                          {index.message}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* why you choose us */}
        <div
          className=" relative bg-[#f4f4f4] w-screen h-[700px]"
          id="services"
        >
          <h1 className=" absolute lg:text-6xl md:text-2xl sm:text-xl top-[150px] -left-42 text-black font-bold lg:mx-[500px] ">
            Why Choose Us
          </h1>
          <div className=" absolute w-40 h-4 top-[250px] left-[450px] bg-sky-500 mb-5 "></div>
          <div className=" absolute w-40 h-4 top-[250px] left-[650px] bg-orange-500 mb-5 "></div>
          <div className=" absolute w-40 h-4 top-[250px] left-[850px] bg-sky-500 mb-5 "></div>
          <div className="mt-10 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 m-10 absolute top-[300px]">
            {Choose.map((index, key) => {
              return (
                <div>
                  <div
                    key={key.name}
                    className="flex p-2 border border-cyan-500 text-black  rounded-lg shadow-xs"
                  >
                    <div className="p-3 mr- rounded-full ">
                      <p className="w-10 h-10 justify-center text-5xl text-[#45C4E9]">
                        {index.Icon}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 ml-5 text-black text-xl font-bold">
                        {index.name}
                      </p>
                      <p className="text-xs ml-5 text-black">{index.msg}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 m-10 absolute top-[300px]">
            {Choose.map((index, key) => {
              return (
                <div>
                  <div
                    key={key.name}
                    className="flex  p-2 border border-cyan-500 text-black  rounded-lg shadow-xs"
                  >
                    <div className="p-3 mr- rounded-full ">
                      <p className="w-10 h-10 justify-center text-5xl text-[#45C4E9]">
                        {index.Icon}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 ml-5 text-black text-xl font-bold">
                        {index.name}
                      </p>
                      <p className="text-xs ml-5 text-black">{index.msg}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <h1 className=" lg:text-5xl sm:text-xl  h-4 mt-52  ml-[630px] font-extrabold text-sky-500 w-full">
              Blog Posts
            </h1>
          </div>
        </div>
        <div
          className="mt-10 grid gap-2 mb-8 md:grid-cols-2 xl:grid-cols-2 w-full  bg-bg-pri h-[500px] overflow-auto scrollbar-hide"
          id="posts"
        >
          {slides.map((index, key) => {
            return (
              <div key={key.url} className="">
                <div className="w-[600px]  mt-20 mx-auto m-5">
                  <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-bg-ter">
                    <a href="#!">
                      <img
                        class="rounded h-[250px] w-full"
                        src={index.url}
                        alt=""
                      />
                    </a>
                    <div class="p-6">
                      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {index.heading}
                      </h5>
                      <p class="mb-4 text-base text-bg-sec  dark:text-neutral-200">
                        {index.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Navbars>
  );
};
