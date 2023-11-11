import React, { useState } from "react";
import { ANavbar } from "./Acountnavbar";
import { MDBContainer } from "mdb-react-ui-kit";
import { FaBook, FaVideo } from "react-icons/fa";
import { BsBookmarkDashFill } from "react-icons/bs";
import { PiExamBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
export const Content = ({ onItemClick }) => {
  const [activeModule, setActiveModule] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const toggleModule = (moduleId) => {
    if (activeModule === moduleId) {
      setActiveModule(null);
    } else {
      setActiveModule(moduleId);
    }
  };
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    console.log(video); // Set the selected video
  };
  const navItems = [
    {
      id: 1,
      icon: <FaBook />,
      text: "Module 1",
      items: [
        {
          id: 11,
          workbookstatus: true,
          text: "workbook",
          icon: <BsBookmarkDashFill />,
          pdf: "this pdf",
        },
        {
          id: 22,
          text: "Video 1",
          vedios: true,
          icon: <FaVideo />,
          videourl: "https://player.vimeo.com/video/137857207",
        },
        {
          id: 24,
          text: "Video 2",
          vedios: true,
          icon: <FaVideo />,
          videourl: "https://player.vimeo.com/video/130890972",
        },
        {
          id: 25,
          text: "Video 3",
          vedios: true,
          icon: <FaVideo />,
          videourl: "https://player.vimeo.com/video/124139626",
        },
        {
          id: 33,
          quiz: true,
          text: "Quiz",
          icon: <PiExamBold />,
        },
      ],
    },
    {
      id: 2,
      icon: <FaBook />,
      text: "Module 2",
      items: [
        {
          id: 100,
          workbookstatus: true,
          text: "workbook",
          icon: <BsBookmarkDashFill />,
        },
        {
          id: 26,
          text: "Video",
          vedios: true,
          icon: <FaVideo />,
          videourl: "video1url",
        },
        {
          id: 40,
          quiz: true,
          text: "Quiz",
          icon: <PiExamBold />,
        },
      ],
    },
  ];

  return (
    <ANavbar>
      <div className="lg:flex  lg:h-screen sm:grid-cols-1">
        <div className="lg:w-64 bg-bg-fou shadow-black shadow-2xl text-bg-pri h-full overflow-y-auto sm:w-full">
          <ul className="mt-8 ml-5">
            {navItems.map((item) => (
              <li key={item.id} className="mb-4">
                <div
                  className="flex items-center space-x-2 cursor-pointer  "
                  onClick={() => toggleModule(item.id)}
                >
                  {item.icon}
                  <span className="text-lg ">{item.text}</span>
                </div>
                {activeModule === item.id && (
                  <ul className="ml-4">
                    {item.items.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="mb-2 hover:bg-bg-fou hover:text-bg-pri"
                      >
                        <Link
                          className="flex items-center space-x-2 text-bg-pri "
                          onClick={() => handleVideoClick(subItem)}
                        >
                          {subItem.icon}
                          <span>{subItem.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 overflow-y-auto scrollbar-hide w-full mx-auto">
          {selectedVideo ? ( // Render the video content if a video is selected
            <div className="w-[900px]  ms-11 me-11 mt-16">
              <MDBContainer>
                <div className="justify-center align-middle items-center mx-auto">
                  {selectedVideo.vedios ? (
                    <iframe
                      src={selectedVideo.videourl}
                      title={selectedVideo.text}
                      allowfullscreen
                      className="h-[500px] w-[850px] rounded"
                    ></iframe>
                  ) : selectedVideo.quiz ? (
                    // <Quiz />
                    <div className="w-full mx-auto ms-8">
                      {" "}
                      <Quiz />
                    </div>
                  ) : selectedVideo.workbookstatus ? (
                    <p>This is workbook</p>
                  ) : (
                    <span className="grid mt-5">
                      <h2 className="font-bold space-x-1 text-xl">
                        Video Description
                      </h2>

                      <p>{selectedVideo.text} Description Lorem ipsum...</p>
                    </span>
                  )}
                </div>
              </MDBContainer>
            </div>
          ) : (
            <div className=" mt-16">
              <MDBContainer>
                <div className="w-[850px] justify-center align-middle items-center mx-auto">
                  <h1 className="p-3 mt-0 text-2xl font-bold">worknook</h1>
                </div>
              </MDBContainer>
            </div>
          )}
        </div>
      </div>
    </ANavbar>
  );
};
