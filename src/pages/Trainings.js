import React from "react";
import { Navbars } from "../Include/Navbars";
import * as Bs from "react-icons/bs";
import * as Fa from "react-icons/fa";

import * as Md from "react-icons/md";
import { Link } from "react-router-dom";

export const Trainings = () => {
  const Courses = [
    {
      CourseName: "SAT",

      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      CourseName: "TEOFL",

      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      CourseName: "Exam3",

      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      CourseName: "Exam4",

      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
  ];
  const Steps = [
    { name: "Choose Course" },
    { name: "Pay Its Price" },
    { name: "Learn" },
    { name: "Maximize your Chance" },
  ];
  return (
    <Navbars>
      <div className="bg-bg-fou h-[800px] w-screen overflow-auto scrollbar-default">
        {/* <div className="absolute top-40 right-8 flex ">
          <input
            type="text"
            placeholder="Search Courses"
            className="px-4 py-2   focus:outline-none focus:ring focus:border-blue-300  border rounded-full  rounded-r-md text-bg-pri w-[350px] outline-none "
          />
          <Bs.BsSearch className=" p-2 text-[17px] text-black focus:outline-none focus:ring  border w-[45px] h-[50px] rounded-r-lg bg-white hover:bg-transparent hover:text-white" />
        </div> */}
        <div className="max-w-7xl m-auto ">
          <Bs.BsArrowRightShort className="text-white absolute right-20 top-1/2 text-4xl border bg-bg-pri rounded-full" />

          <Bs.BsArrowLeftShort className="text-white absolute left-20 top-1/2 text-4xl bg-bg-pri rounded-full " />
          <section id="pricing" className="">
            <header className="text-center ">
              <h3 className="text-5xl font-bold mb-5 text-bg-pri ">
                Test it For Free
              </h3>
              <p className="text-xl text-bg-pri mb-2">
                You Can Start where ever you Want
              </p>
            </header>
            <div className="flex flex-col grid-cols-3 mt-10 mx-5 space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:mx-0 justify-between lg:overflow-auto  scrollbar-hide mb-10">
              {Courses.map((item, key) => {
                return (
                  <div className="flex-1 lg:w-[500px]" key={key}>
                    <div className="bg-bg-pri p-10 rounded-lg">
                      <div className="grid justify-between items-center">
                        <div className="">
                          <h4 className="text-2xl font-bold text-white w-[300px]  text-center">
                            {item.CourseName}
                          </h4>
                        </div>
                        {/* <div>
                          <div className="bg-gray-100 p-2 rounded-lg text-center">
                            <h4 className="text-2xl font-bold text-white"></h4>
                            <p className="text-xs text-gray-500"></p>
                          </div>
                        </div> */}
                      </div>
                      <hr className="text-gray-100 mt-5 h-3" />
                      {/* START LIST SECTION*/}
                      <div className="mt-10">
                        <ul role="list" className="space-y-4">
                          <li className="flex items-center">
                            <div className="bg-indigo-900 rounded-full p-1">
                              <svg
                                className="flex-shrink-0 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="ml-3 text-base text-white">
                              {item.feature1}
                            </span>
                          </li>
                          <li className="flex items-center">
                            <div className="bg-indigo-900 rounded-full p-1">
                              <svg
                                className="flex-shrink-0 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="ml-3 text-base text-white">
                              {item.feature2}
                            </span>
                          </li>
                          <li className="flex items-center">
                            <div className="bg-indigo-900 rounded-full p-1">
                              <svg
                                className="flex-shrink-0 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="ml-3 text-base text-white">
                              {item.feature3}
                            </span>
                          </li>
                        </ul>
                      </div>
                      {/* END LIST SECTION*/}
                      <div className="mt-10">
                        <Link to="/gfjhf">
                          <button className="bg-bg-sec font-bold text-lg text-white w-full py-3 rounded-lg">
                            {" "}
                            Start
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>{" "}
        {/* <div className="w-screen">
          <div className="fluid ">
            <h1 className="text-white text-3xl text-center font-extrabold">
              Get Started with simple Steps
            </h1>{" "}
            <div className="flex justify-center items-center h-screen">
              <ol type="I">
                {Steps.map((i, k) => {
                  return (
                    <li className="text-white" key={k}>
                      {i.name}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div> */}
      </div>
    </Navbars>
  );
};
