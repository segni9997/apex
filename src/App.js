import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./Include/Login";
import AboutUs from "./Include/AboutUs";
import { Home } from "./Include/Home";
import { Trainings } from "./pages/Trainings";
import { Pay } from "./pages/Pay";
import { SideBar } from "./Include/SideBar";
import { Course } from "./pages/Course";
import { HomeAccount } from "./pages/HomeAccount";
import { CourseDescripton } from "./pages/CourseDescripton";
import { ANavbar } from "./pages/Acountnavbar";
import { MyCourse } from "./pages/MyCourse";
import { OurCourse } from "./pages/OurCourse";
import Content from "./pages/Content";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/sidebar" element={<SideBar />} />
      <Route path="/acounthomee" element={<HomeAccount />} />
      <Route path="/training" element={<Trainings />} />
      <Route path="/courses" element={<Course />} />
      <Route path="/payement" element={<Pay />} />
      <Route path="/coursedescription" element={<CourseDescripton />} />
      <Route path="/acounthome" element={<ANavbar />} />
      <Route path="/mycourses" element={<MyCourse />} />
      <Route path="/ourcourses" element={<OurCourse />} />
      <Route path="/content" element={<Content />} />
    </Routes>
  );
}


export default App;
