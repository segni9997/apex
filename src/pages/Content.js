import React, { Component } from "react";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      courseTitle: "Introduction to React",
      instructor: "John Smith",
      description: "This course covers the basics of React development.",
      lessons: [
        { id: 1, title: "Getting Started with React", duration: "30 minutes" },
        { id: 2, title: "Creating Components", duration: "45 minutes" },
        // Add more lessons as needed
      ],
    };
  }

  render() {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold">{this.state.courseTitle}</h1>
        <p className="text-gray-600">Instructor: {this.state.instructor}</p>
        <p className="text-gray-700">{this.state.description}</p>
        <h2 className="text-2xl mt-4 mb-2 font-semibold">Course Content</h2>
        <ul className="list-disc pl-6">
          {this.state.lessons.map((lesson) => (
            <li key={lesson.id} className="text-gray-700">
              {lesson.title} - Duration: {lesson.duration}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Content;
