// Course.js
import React from "react";
import { useParams } from "react-router-dom";
import courseData from "./CourseData.json";
import CoursePage from "./CoursePage";

export const Course = () => {
  const { pageId } = useParams();
  const pageData = courseData.pages.find(
    (page) => (page.id === parseInt(pageId), console.log(pageId))
  );

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
        <h3 className="text-lg font-semibold">Course Contents</h3>
        <ul className="mt-4">
          {courseData.pages.map((page) => (
            <li key={page.id}>
              <a
                href={`/courses/${page.id}`}
                className="text-blue-600 hover:underline"
              >
                {page.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4">
        {pageData ? (
          <CoursePage pageData={pageData} />
        ) : (
          <div>Page not found</div>
        )}
      </div>
    </div>
  );
};
