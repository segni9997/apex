import React from "react";
import { ANavbar } from "./Acountnavbar";
import consult from "../assets/img/consultingf.jpg";
import consult2 from "../assets/img/consulting-2045471_1920.jpg";
import { Link } from "react-router-dom";

export const OurCourse = () => {
  const Courses = [
    {
      Courseimg: consult,
      CourseName: "Course1",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult2,
      CourseName: "Course2",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult,
      CourseName: "Course 3",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult2,
      CourseName: "Course 4",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult,
      CourseName: "Course 5",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult2,
      CourseName: "Course 6",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult,
      CourseName: "Course 7",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult2,
      CourseName: "Course 8",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult,
      CourseName: "Course 9",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult2,
      CourseName: "Course 10",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult,
      CourseName: "Course 11",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult2,
      CourseName: "Course 12",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
  ];
  return (
    <ANavbar>
      {" "}
      {/* <div className="mb-5 ms-8  ">
        <input
          type="text"
          name="search_box"
          required
          placeholder="search courses..."
          maxlength="100"
          className="border-2  p-2 lg:w-80 sm:w-40 rounded-l-full border-bg-ter mx-auto  pl-4 lg:text-xl"
        />
        <button
          type="submit"
          class="border-2 ml-0 p-2 border-bg-ter hover:bg-bg-ter hover:text-white lg:text-xl"
        >
          search
        </button>
      </div> */}{" "}
      <div className="flex items-center justify-end me-28 h-16 mt-5">
        <input
          type="text"
          className="px-4 py-2 rounded-full border border-gray-300 shadow-md lg:w-[300px] outline-bg-ter"
          placeholder="Search Courses here.."
        />
        <button className="ml-2 bg-bg-ter text-white px-4 py-2 rounded-full hover:border-bg-ter border-bg-ter border hover:bg-transpaarent hover:text-bg-pri">
          Search
        </button>
      </div>
      <div className="grid lg:grid-cols-4 lg:ml-10 md:grid-cols-2 sm:grid-cols-1 w-[calc(100%-100px)] mt-10">
        {Courses.map((item, key) => (
          <div
            className="flex-1 rounded-lg ml-2 mr-2 border border-bg-pri mb-4"
            key={key}
          >
            <img
              src={item.Courseimg}
              alt="Pic"
              className="w-full rounded-t-lg rounded-tl-lg"
            />
            <div className=" p-10  bg-bg-pri rounded-b">
              <h2 className="mx-auto text-center text-3xl font-bold text-bg-fou">
                {item.CourseName}
              </h2>{" "}
              {/* START LIST SECTION*/}
              <div className="mt-10">
                <ul role="list" className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-bg-sec rounded-full p-1">
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
                    <span className="ml-3 text-base text-bg-fou">
                      {item.feature1}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-bg-sec rounded-full p-1">
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
                    <span className="ml-3 text-base text-bg-fou">
                      {item.feature2}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-bg-sec rounded-full p-1">
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
                    <span className="ml-3 text-base text-bg-fou">
                      {item.feature3}
                    </span>
                  </li>
                </ul>
              </div>
              {/* END LIST SECTION*/}
              <div className="mt-10">
                <Link to="/coursedescription">
                  <button className="bg-bg-ter text-lg text-bg-pri border-bg-ter hover:bg-transparent border hover:border-bg-ter hover:text-bg-fou  font-bold w-full py-3 rounded-[40px]">
                    {" "}
                    View Discription
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ANavbar>
  );
};
