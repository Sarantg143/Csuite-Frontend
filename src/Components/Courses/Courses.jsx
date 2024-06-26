// src/components/Courses.js
import React from "react";
import "./Courses.css";
import pm from "../Assets/js.png";
import bm from "../Assets/bm.jpg";
import agile from "../Assets/agile.jpg";
import ml from "../Assets/ml.jpg";
// import ai from "../Assets/js.png";
// import java from "../Assets/js.png";
// import js from "../Assets/js.png";
// import python from "../Assets/js.png";
// import image from "../Assets/image.png";
import imagenotxt from "../Assets/imagenotxt.png";
import imagenotxt2 from "../Assets/imagenotxt2.png";
import imagenotxt3 from "../Assets/imagenotxt3.png";
import imagenotxt4 from "../Assets/imagenotxt4.png";
import imagelarger from "../Assets/larger1.png";
import imagelarger2 from "../Assets/larger2.png";

const courses = [
  {
    id: 1,
    title: "Project Management",
    description: "This is a brief description of Course 1.",
    image: pm,
  },
  {
    id: 2,
    title: "Business Management",
    description: "This is a brief description of Course 2.",
    image: bm,
  },
  {
    id: 3,
    title: "Agile",
    description: "This is a brief description of Course 3.",
    image: agile,
  },
  {
    id: 4,
    title: "Machine Learning",
    description: "This is a brief description of Course 4.",
    image: ml,
  },
  //   {
  //     id: 5,
  //     title: "Artificial Intelligence",
  //     description: "This is a brief description of Course 5.",
  //     image: ai,
  //   },
  //   {
  //     id: 6,
  //     title: "Java",
  //     description: "This is a brief description of Course 6.",
  //     image: java,
  //   },
  //   {
  //     id: 7,
  //     title: "JavaScript",
  //     description: "This is a brief description of Course 7.",
  //     image: js,
  //   },
  //   {
  //     id: 8,
  //     title: "Python",
  //     description: "This is a brief description of Course 8.",
  //     image: python,
  //   },
];

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
  //   {
  //     id: 5,
  //     title: "Financial Planning and Analysis",
  //     description:
  //       "Advanced financial planning, budgeting, and analysis techniques",
  //     image: ai,
  //     lessons: [
  //       "Financial Planning",
  //       "Budgeting and Forecasting",
  //       "Financial Statement Analysis",
  //       "Risk Management",
  //       "Financial Decision-Making",
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "Corporate Finance and Investment",
  //     description:
  //       "Principles of corporate finance, investment analysis, and M&A",
  //     image: java,
  //     lessons: [
  //       "Corporate Finance Principles",
  //       "Capital Structure",
  //       "Investment Analysis",
  //       "Mergers and Acquisitions",
  //       "Managing Investments",
  //     ],
  //   },
  //   {
  //     id: 7,
  //     title: "JavaScript for Modern Web Development",
  //     description: "Learn advanced JavaScript techniques and best practices",
  //     image: js,
  //     lessons: [
  //       "Advanced JavaScript Concepts",
  //       "Asynchronous Programming",
  //       "JavaScript Design Patterns",
  //       "Testing and Debugging",
  //       "Performance Optimization",
  //     ],
  //   },
  //   {
  //     id: 8,
  //     title: "Python for Data Science",
  //     description:
  //       "Master Python programming for data analysis and machine learning",
  //     image: python,
  //     lessons: [
  //       "Python Basics",
  //       "Data Manipulation with Pandas",
  //       "Data Visualization",
  //       "Machine Learning with Scikit-Learn",
  //       "Deep Learning with TensorFlow",
  //     ],
  //   },
];

const coursesDataLonger = [
  {
    id: 1,
    title: "Strategic Leadership and Management",
    description:
      "Develop strategic thinking and effective management techniques",
    image: imagelarger2,
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
    image: imagelarger,
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
    image: imagelarger,
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
    image: imagelarger,
    lessons: [
      "IT Strategy Development",
      "Digital Transformation",
      "IT Governance",
      "Aligning IT and Business",
      "IT Performance",
    ],
  },
  {
    id: 1,
    title: "Strategic Leadership and Management",
    description:
      "Develop strategic thinking and effective management techniques",
    image: imagelarger,
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
    image: imagelarger,
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
    image: imagelarger,
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
    image: imagelarger,
    lessons: [
      "IT Strategy Development",
      "Digital Transformation",
      "IT Governance",
      "Aligning IT and Business",
      "IT Performance",
    ],
  },
];

const Courses = () => {
  return (
    <>
      <div className="main-content">
        <div className="card-container1">
          <h2>Courses - Design 1(Default)</h2>
          <div className="courses-container1">
            {courses.map((course) => (
              <div className="course-card1" key={course.id}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image1"
                />
                <div className="course-details1">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <button className="course-button1">View Course</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cardContainer2">
          <h2>Courses - Design 2</h2>
          <div className="courseContainer2">
            {coursesData.map((course) => (
              <div className="courseCard2" key={course.id}>
                <div className="courseImageBox2">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="courseImage2"
                  />
                  <div className="courseImageTxt2">{course.title}</div>
                </div>
                <div className="courseDetails2">
                  <p>{course.description}</p>
                  <button className="courseDetailBtn2">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cardContainer3">
          <h2>Courses - Design 3</h2>
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
                  <button className="lessonDetailBtn3">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cardContainer4">
          <h2>Courses - Design 4 - Still Working</h2>
          <div className="courseContainer4">
            {coursesDataLonger.map((course) => (
              <div className="courseCard4" key={course.id}>
                <div className="courseImageBox4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="courseImage4"
                  />
                  <div className="courseImageTxt4">{course.title}</div>
                </div>

                <div className="courseDetailsBox4">
                  <p>{course.description}</p>
                  <div className="courseLessonBox4">
                    <h6>Context</h6>
                    <ul>
                      {course.lessons.slice(0, 3).map((lesson, index) => (
                        <li key={index}>{lesson}</li>
                      ))}
                      {course.lessons.length > 3 && <li>and more ...</li>}
                    </ul>
                    <button className="lessonDetailBtn4">View Details</button>
                  </div>
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
