import React, { useState } from "react";
import "./CourseDetails.css";
import { Tabs, Tab, Accordion } from "react-bootstrap";
import tickIcon from "../Assets/tickIcon.svg";
import lightning from "../Assets/lightning.svg";
import settings from "../Assets/settings.svg";

const courseContentDetailsData = {
  title: "Strategic Leadership and Management",
  overviewPoints: [
    {
      heading: "Strategic Focus",
      content:
        "Develop essential skills for effective strategic leadership and management.",
    },
    {
      heading: "Comprehensive Coverage",
      content:
        "Covers a wide spectrum from strategic planning to organizational transformation.",
    },
    {
      heading: "Dynamic Environments",
      content:
        "Learn strategies to navigate and thrive in today's rapidly evolving business landscapes.",
    },
    {
      heading: "Innovative Leadership",
      content:
        "Foster innovation and creativity to drive continuous improvement.",
    },
    {
      heading: "Data-Driven Decisions",
      content:
        "Gain insights into leveraging data for informed decision-making and initiatives.",
    },
    {
      heading: "Organizational Transformation",
      content:
        "Understand methodologies for leading successful organizational change.",
    },
    {
      heading: "Global Perspective",
      content:
        "Gain insights into leadership challenges and opportunities in diverse markets.",
    },
    {
      heading: "Ethical Leadership",
      content:
        "Explore the importance of ethical leadership in building sustainable business practices.",
    },
    {
      heading: "Team Empowerment",
      content:
        "Learn techniques to empower and motivate teams for high performance.",
    },
    {
      heading: "Strategic Vision",
      content:
        "Develop a strategic vision that aligns organizational goals with stakeholder expectations.",
    },
  ],
  description: `
Certainly! Here's an extended version of the description:

This comprehensive course is designed to equip you with the critical skills needed for effective strategic leadership and management in today's dynamic business environment. It covers a wide range of topics from strategic planning to organizational transformation, delving deep into the complexities of modern leadership challenges. By exploring key concepts and practical applications, this course empowers you to lead with confidence, navigate through uncertainty, and adapt strategies to evolving market conditions.
Throughout the course, you will gain insights into strategic decision-making processes, learn how to leverage data-driven insights for informed choices, and cultivate the ability to inspire and motivate teams toward common goals. Emphasizing innovation and adaptive leadership, you will explore methodologies for fostering creativity, managing change, and driving sustainable success in your organization.

By the end of this course, you will emerge not only with enhanced leadership capabilities but also with a strategic mindset ready to tackle complex business challenges and seize opportunities for growth in the global marketplace.`,
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
  header: "Analog and Digital Modulation",
  videoUrl: "https://www.youtube.com/embed/Zj6x_7i1jYY",
  whoIsThisFor: [
    { text: "Electrical Engineering 3rd Semester", icon: lightning },
    { text: "Electrical Engineering 5th Semester", icon: lightning },
    { text: "Mechanical Engineering 5th Semester", icon: settings },
  ],
  whatYouGet: [
    {
      icon: tickIcon,
      title: "Master Core Concepts",
      description:
        "Understand engineering fundamentals for a strong academic foundation.",
    },
    {
      icon: tickIcon,
      title: "Collaborative Environment",
      description:
        "Join a dynamic community, forging professional relationships.",
    },
  ],
  syllabus: `Syllabus`,
  price: 3500,
  courseDetails: [
    { icon: "📘", text: "Beginner Level" },
    { icon: "👥", text: "10 Total Enrolled" },
    { icon: "⏰", text: "3 hours Duration" },
    { icon: "🎓", text: "Certificate of Completion" },
    { icon: "🌐", text: "Private community of peers" },
    { icon: "🔑", text: "Lifetime access to materials" },
  ],
};

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [activeLesson, setActiveLesson] = useState("");

  const handleLessonClick = (index) => {
    setActiveLesson(index === activeLesson ? "" : index);
  };

  const calculateTotalDuration = (videos) => {
    let totalDuration = 0;
    videos.forEach((video) => {
      totalDuration +=
        parseInt(video.duration.split(":")[0], 10) * 60 +
        parseInt(video.duration.split(":")[1], 10);
    });
    return totalDuration;
  };

  const convertToReadableDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="courseDetailsBox">
      <div className="row CDHeader g-0">
        {/* {courseContentDetailsData.header} */}
        <div className="CDHeaderIntroVideo">
          <div className="embed-responsive-16by9">
            <iframe
              title="title"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/Zj6x_7i1jYY"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="row CDBody">
        <div className="CDLHS">
          <div className="CDvideoBox">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="title"
                className="embed-responsive-item"
                src={courseContentDetailsData.videoUrl}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="CDWhoIsThisFor">
            <h5>Who is this course for</h5>
            <div className="CDLightningBox">
              {courseContentDetailsData.whoIsThisFor.map((item, index) => (
                <div key={index}>
                  <div className="CDLightningTxt" key={index}>
                    {item.text}
                    <img
                      className="CDLightningSVG"
                      src={item.icon}
                      alt={item.text}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="CDWhatYouGet">
            <h5>What you'll get out of this</h5>
            {courseContentDetailsData.whatYouGet.map((item, index) => (
              <div className="CDWhatBoxContent" key={index}>
                <img src={item.icon} alt={item.title} />
                <div>
                  <div className="CDItemTitle">{item.title}</div>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="CDMHS">
          <div className="CDtabBox">
            <Tabs
              id="course-content-tabs"
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
            >
              <Tab
                eventKey="description"
                title="Description"
                className="CDtabBoxDesc"
              >
                <p>{courseContentDetailsData.description}</p>
              </Tab>
              <Tab eventKey="lessons" title="Lessons">
                <div className="CDAccordianBox">
                  <Accordion
                    activeKey={activeLesson}
                    onSelect={handleLessonClick}
                  >
                    {courseContentDetailsData.lessons.map((lesson, index) => (
                      <Accordion.Item key={index} eventKey={index}>
                        <Accordion.Header>
                          <div className="CDlesson-meta">
                            <div className="CDlesson-title">
                              {index + 1}. {lesson.title}
                            </div>
                            <span className="CDlesson-duration">
                              Duration:{" "}
                              {convertToReadableDuration(
                                calculateTotalDuration(lesson.videos)
                              )}
                            </span>
                            <span className="">
                              &nbsp;/&nbsp; Total Videos: {lesson.videos.length}
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <ul className="list-group">
                              {lesson.videos.map((video, vidIndex) => (
                                <li key={vidIndex} className="list-group-item">
                                  <span className="video-number">
                                    <a href={video.link}>
                                      {`${index + 1}.${vidIndex + 1}`}{" "}
                                      {video.title}
                                    </a>
                                  </span>
                                  <span className="lesson-duration">
                                    Duration:{" "}
                                    {convertToReadableDuration(video.duration)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </Tab>
              <Tab
                eventKey="overview"
                title="Overview"
                className="CDtabBoxOverV"
              >
                {courseContentDetailsData.overviewPoints.map((point, index) => (
                  <div key={index}>
                    <h5>* {point.heading}</h5>
                    <p>{point.content}</p>
                  </div>
                ))}{" "}
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="CDRHS">
          <div className="CDPriceBox">
            <h3>₹ {courseContentDetailsData.price}</h3>
            <div className="CDOffer">
              <div className="CDStrike">
                ₹ {courseContentDetailsData.price * 2}
              </div>
              <span>50%</span>
            </div>
            <button className="CDCartBtn">Add to Cart</button>
            <button className="CDBuyBtn">Buy Now</button>
          </div>
          <div className="CDCourseDetails">
            <h4>Course Details</h4>
            <div>
              {courseContentDetailsData.courseDetails.map((detail, index) => (
                <div key={index} className="CDCourseDetailRow">
                  <span className="detailIcon">{detail.icon}</span>
                  {detail.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
