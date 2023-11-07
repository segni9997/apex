import React from "react";
import { ANavbar } from "./Acountnavbar";
import { Link } from "react-router-dom";
import consult from "../assets/img/consultingf.jpg";
import consult2 from "../assets/img/consulting-2045471_1920.jpg";
export const HomeAccount = () => {
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
      CourseName: "Course3",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      Courseimg: consult2,
      CourseName: "Course4",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
  ];
  const exams = [
    {
      examName: "SAT",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
    {
      examName: "TOEFL",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
    },
  ];
  return (
    <ANavbar>
      {" "}
      <div className={` text-bg-pri text-4xl p-5 font-bold`}>
        <h1 className="items-center">Popular Courses</h1>
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
      <div
        className={`p-2 items-center justify-center  mt-5 w-1/2 ml-12 sm:mx-auto  text-center mb-5 `}
      >
        <Link
          to="/usercourses"
          className={`text-center justify-center mx-auto hover:bg-transparent border border-bg-ter text-bg-pri hover:text-bg-pri p-4 rounded-[40px] font-bold bg-bg-ter`}
        >
          View All course
        </Link>
      </div>{" "}
    </ANavbar>
  );
};
