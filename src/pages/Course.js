import React from 'react'
import { SideBar } from '../Include/SideBar'

export const Course = () => {
  const courseData = [
    {
      tutor: "John Deo",
      date: "21-10-2022",
      title: "Complete HTML Tutorial",
      videoCount: "10",
    },
    {
      tutor: "John Deo",
      date: "21-10-2022",
      title: "Complete CSS Tutorial",
      videoCount: "10",
    },
  ];
  return <SideBar></SideBar>;
};

