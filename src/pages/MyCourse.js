import React from "react";
import { ANavbar } from "./Acountnavbar";
import consult from "../assets/img/consultingf.jpg";
import consult2 from "../assets/img/consulting-2045471_1920.jpg";
import { Link } from "react-router-dom";
import { Progress, Typography } from "@material-tailwind/react";
export const MyCourse = () => {
  const Courses = [
    {
      Courseimg: consult,
      CourseName: "Course1",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
      button: "start",
      complete: "0%",
      path: "/content",
    },
    {
      Courseimg: consult2,
      CourseName: "Course2",
      percourse: "Per Course",
      feature1: "feature 1",
      feature2: "Feature 2",
      feature3: "feature 3",
      button: "Continue",
      complete: "50%",
      path: "/content",
    },
  ];
  return (
    <ANavbar>
      {" "}
      <div className={` text-bg-pri text-4xl p-5 font-bold`}>
        <h1 className="items-center">Your Courses</h1>
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
              <div className="mt-10  ">
                {" "}
                <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <Typography variant="h6">
                      <span className="text-bg-ter"> Completed</span>
                    </Typography>
                    <Typography color="blue-gray" variant="h6">
                      <span className="text-bg-ter">{item.complete}</span>
                    </Typography>
                  </div>
                  <Progress value={50} />
                </div>
              </div>
              {/* END LIST SECTION*/}
              <div className="mt-10">
                <Link to={item.path}>
                  <button className="bg-bg-ter text-lg text-bg-pri border-bg-ter hover:bg-transparent border hover:border-bg-ter hover:text-bg-fou  font-bold w-full py-3 rounded-[40px]">
                    {" "}
                    {item.button}
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
