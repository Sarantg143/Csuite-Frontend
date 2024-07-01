import React from "react";
import "./CourseDetails.css";

const courseDetails = {
  header: "Analog and Digital Modulation",
  videoUrl: "https://www.youtube.com/embed/Zj6x_7i1jYY",
  whoIsThisFor: [
    "Electrical Engineering 3rd Semester",
    "Electrical Engineering 5th Semester",
    "Mechanical Engineering 5th Semester",
  ],
  whatYouGet: [
    {
      icon: "ICON",
      title: "Master Core Concepts",
      description:
        "Understand engineering fundamentals for a strong academic foundation.",
    },
    {
      icon: "ICON",
      title: "Collaborative Environment",
      description:
        "Join a dynamic community, forging professional relationships.",
    },
  ],
  overview:
    "Welcome to the Analog and Digital Modulation course! Dive into the dynamic realm of Electrical Engineering as we unravel the intricacies of signal modulation. Explore the foundations of analog and digital modulation techniques, equipping you with essential skills for effective communication in the world of engineering.",
  syllabus: ` Sylabus`,
  price: 35.0,
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
  return (
    <div className="courseDetailsBox">
      <div className="row CDHeader">{courseDetails.header}</div>
      <div className="row CDBody">
        <div className="CDLHS">
          <div className="CDvideoBox">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="title"
                className="embed-responsive-item"
                src={courseDetails.videoUrl}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="CDWhoIsThisFor">
            <h4>Who is this course for</h4>
            <div>
              {courseDetails.whoIsThisFor.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className="CDWhatYouGet">
            <h4>What you'll get out of this</h4>
            {courseDetails.whatYouGet.map((item, index) => (
              <div className="CDWhatBoxContent" key={index}>
                <span>{item.icon}</span>
                <div>
                  <h6>{item.title}</h6>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="CDMHS">
          <div className="CDOverview">
            <h3>Course Overview</h3>
            <p>{courseDetails.overview}</p>
            <button>Show More</button>
          </div>
          <div className="CDSyllabus">
            <h3>Course Syllabus</h3>
            <p>{courseDetails.syllabus}</p>
          </div>
        </div>
        <div className="CDRHS">
          <div className="CDPriceBox">
            <h3>₹ {courseDetails.price}</h3>
            <div className="CDOffer">
              <h5 className="CDStrike">₹ {courseDetails.price * 2}</h5>
              <span>50%</span>
            </div>
            <button className="CDCartBtn">Add to Cart</button>
            <button className="CDBuyBtn">Buy Now</button>
          </div>
          <div className="CDCourseDetails">
            <h4>Course Details</h4>
            <div>
              {courseDetails.courseDetails.map((detail, index) => (
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
