// src/components/Courses.js
import React from "react";
import "./Courses.css";
import imagenotxt from "../Assets/imagenotxt.png";
import imagenotxt2 from "../Assets/imagenotxt2.png";
import imagenotxt3 from "../Assets/imagenotxt3.png";
import imagenotxt4 from "../Assets/imagenotxt4.png";
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "Strategic Leadership and Management",
    description:
      "Develop strategic thinking and effective management techniques",
    image: imagenotxt,
    lessons: [
      "Strategic Leadership",
      "Organizational Culture",
      "Decision-Making Processes",
      "Leading Through Change",
      "Stakeholder Management",
    ],
  },
  {
    id: 2,
    title: "Corporate Governance and Ethics",
    description:
      "Promote transparency, accountability, and ethical decision-making",
    image: imagenotxt2,
    lessons: [
      "Corporate Governance",
      "Ethical Leadership",
      "Compliance Frameworks",
      "Risk Management",
      "Corporate Social Responsibility",
    ],
  },
  {
    id: 3,
    title: "Emerging Technologies and Innovation",
    description: "Stay ahead with AI, blockchain, IoT, and cybersecurity",
    image: imagenotxt3,
    lessons: [
      "Emerging Technologies",
      "AI and Machine Learning",
      "Blockchain",
      "Internet of Things (IoT)",
      "Cybersecurity",
    ],
  },
  {
    id: 4,
    title: "IT Strategy and Digital Transformation",
    description: "Drive digital transformation with effective IT strategies",
    image: imagenotxt4,
    lessons: [
      "IT Strategy Development",
      "Digital Transformation",
      "IT Governance",
      "Aligning IT and Business",
      "IT Performance",
    ],
  },
  {
    id: 5,
    title: "Financial Planning and Analysis",
    description:
      "Advanced financial planning, budgeting, and analysis techniques",
    image: imagenotxt3,
    lessons: [
      "Financial Planning",
      "Budgeting and Forecasting",
      "Financial Statement Analysis",
      "Risk Management",
      "Financial Decision-Making",
    ],
  },
  {
    id: 6,
    title: "Corporate Finance and Investment",
    description:
      "Principles of corporate finance, investment analysis, and M&A",
    image: imagenotxt,
    lessons: [
      "Corporate Finance Principles",
      "Capital Structure",
      "Investment Analysis",
      "Mergers and Acquisitions",
      "Managing Investments",
    ],
  },
  {
    id: 7,
    title: "JavaScript for Modern Web Development",
    description: "Learn advanced JavaScript techniques and best practices",
    image: imagenotxt4,
    lessons: [
      "Advanced JavaScript Concepts",
      "Asynchronous Programming",
      "JavaScript Design Patterns",
      "Testing and Debugging",
      "Performance Optimization",
    ],
  },
  {
    id: 8,
    title: "Python for Data Science",
    description:
      "Master Python programming for data analysis and machine learning",
    image: imagenotxt2,
    lessons: [
      "Python Basics",
      "Data Manipulation with Pandas",
      "Data Visualization",
      "Machine Learning with Scikit-Learn",
      "Deep Learning with TensorFlow",
    ],
  },
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-content">
        <div className="cardContainer3">
          <h2>Courses</h2>
          <div className="courseContainer3">
            {coursesData.map((course) => (
              <div className="courseCard3" key={course.id}>
                <div className="courseOverlay3">
                  <div className="courseImageBox3">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="courseImage3"
                    />
                    <div className="courseImageTxt3">{course.title}</div>
                  </div>
                  <div className="courseDetails3">
                    <p>{course.description}</p>
                    <button className="courseDetailBtn3">View Details</button>
                  </div>
                </div>
                <div className="courseLessonBox3">
                  <h5>Lessons</h5>
                  <ul>
                    {course.lessons.slice(0, 5).map((lesson, index) => (
                      <li key={index}>{lesson}</li>
                    ))}
                    {course.lessons.length > 5 && <li>...and more</li>}
                  </ul>
                  <button
                    onClick={() => navigate("/courseContent")}
                    className="lessonDetailBtn3"
                  >
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
