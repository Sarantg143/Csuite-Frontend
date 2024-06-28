import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionCollapse from "react-bootstrap/AccordionCollapse";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./CourseContent.css";

const CourseContent = () => {
  const courseData = {
    title: "Strategic Leadership and Management",
    overview:
      "This comprehensive course is designed to equip you with the critical skills needed for effective strategic leadership and management in today's dynamic business environment. Covering a wide range of topics from strategic planning to organizational transformation, this course will empower you to lead with confidence and drive sustainable success.",
    lessons: [
      {
        title: "Introduction to Strategic Planning",
        description:
          "Explore the fundamentals of strategic planning and its importance in achieving organizational goals.",
        videos: [
          {
            title: "Strategic Planning Overview",
            link: "#",
            duration: "14:20",
          },
          { title: "Strategic Visioning", link: "#", duration: "12:45" },
        ],
      },
      {
        title: "Leadership Strategies for Change",
        description:
          "Learn effective leadership strategies to navigate and lead organizational change initiatives.",
        videos: [
          {
            title: "Change Management Essentials",
            link: "#",
            duration: "18:30",
          },
          { title: "Leading Through Crisis", link: "#", duration: "16:15" },
        ],
      },
      {
        title: "Innovation and Entrepreneurship",
        description:
          "Explore the role of innovation and entrepreneurship in driving organizational growth and competitiveness.",
        videos: [
          { title: "Innovation Frameworks", link: "#", duration: "20:10" },
          { title: "Entrepreneurial Mindset", link: "#", duration: "14:55" },
        ],
      },
      {
        title: "Strategic Decision Making",
        description:
          "Develop essential skills in strategic decision-making processes and frameworks.",
        videos: [
          { title: "Decision Analysis", link: "#", duration: "17:40" },
          { title: "Risk Management Strategies", link: "#", duration: "15:25" },
        ],
      },
      {
        title: "Leading High-Performance Teams",
        description:
          "Learn strategies to build and lead high-performance teams for achieving strategic objectives.",
        videos: [
          { title: "Team Dynamics", link: "#", duration: "19:05" },
          { title: "Motivation and Engagement", link: "#", duration: "13:50" },
        ],
      },
      {
        title: "Strategic Marketing and Brand Management",
        description:
          "Understand the importance of strategic marketing and brand management in driving customer value and loyalty.",
        videos: [
          { title: "Brand Strategy", link: "#", duration: "16:55" },
          { title: "Digital Marketing Trends", link: "#", duration: "14:30" },
        ],
      },
      {
        title: "Financial Strategies for Leaders",
        description:
          "Gain insights into financial strategies and tools essential for strategic decision-making.",
        videos: [
          { title: "Financial Analysis", link: "#", duration: "18:20" },
          { title: "Budgeting and Forecasting", link: "#", duration: "12:40" },
        ],
      },
      {
        title: "Ethics and Corporate Governance",
        description:
          "Explore ethical considerations and best practices in corporate governance.",
        videos: [
          { title: "Corporate Ethics", link: "#", duration: "15:30" },
          { title: "Governance Structures", link: "#", duration: "13:15" },
        ],
      },
    ],
  };

  const [activeLesson, setActiveLesson] = useState(null);

  const handleLessonClick = (index) => {
    setActiveLesson(index === activeLesson ? null : index);
  };

  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="courseContentContainer">
      <div className="row firstRow col-12">
        <div className="col-8">
          <div className="row">
            <div className="backBtn">Back &#9655;</div>
          </div>
          <div className="row firstRowHeading">
            <h2>{courseData.title}</h2>
            <div className="nextBtn">Got to next Video &#9655;</div>
          </div>
        </div>
        <div className="col-4 profileBox">Profile Tab</div>
      </div>
      <div className="row secondRow">
        <div className="col-8">
          <div className="videoBox">
            <div className="embed-responsive embed-responsive-16by9 mb-4">
              <iframe
                title="title"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/Zj6x_7i1jYY"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoTitle">{courseData.title}</div>
          </div>

          <div className="tabBox">
            <Tabs
              id="course-content-tabs"
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
            >
              <Tab eventKey="description" title="Description">
                <p>{courseData.lessons[0].description}</p>
              </Tab>
              <Tab eventKey="lessons" title="Lessons">
                {courseData.lessons.map((lesson, index) => (
                  <div key={index}>
                    <h5>{lesson.title}</h5>
                    <ul className="list-group">
                      {lesson.videos.map((video, vidIndex) => (
                        <li key={vidIndex} className="list-group-item">
                          <a href={video.link}>{video.title}</a> -{" "}
                          {video.duration}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Tab>
              <Tab eventKey="overview" title="Overview">
                <p>{courseData.overview}</p>
              </Tab>
            </Tabs>{" "}
          </div>
        </div>
        <div className="col-4 accordianBox">
          <Accordion
            activeKey={activeLesson}
            onSelect={handleLessonClick}
            alwaysOpen
          >
            {courseData.lessons.map((lesson, index) => (
              <div key={index}>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header onClick={() => handleLessonClick(index)}>
                    {lesson.title}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <p>{lesson.description}</p>
                      <ul className="list-group">
                        {lesson.videos.map((video, vidIndex) => (
                          <li key={vidIndex} className="list-group-item">
                            <a href={video.link}>{video.title}</a> -{" "}
                            {video.duration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
