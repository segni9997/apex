import React from "react";

const CoursePage = ({ pageData }) => {
  return (
    <div>
      <h2>{pageData.title}</h2>
      <p>{pageData.content}</p>
      {pageData.videoUrl && <video src={pageData.videoUrl} controls />}
      {pageData.pdf && <p>Hello pdf</p>}
    </div>
  );
};

export default CoursePage;
