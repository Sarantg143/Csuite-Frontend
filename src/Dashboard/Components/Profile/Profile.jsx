import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import profileIMG from "../Assets/Images/profileImage.jpeg";
import profileVector from "../Assets/Images/profileVector.png";
import phoneSVG from "../Assets/SVG/phoneSVG.svg";
import mailSVG from "../Assets/SVG/mailSVG.svg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    testScore: "",
    idCard: "",
    jobTitle: "",
    address: "",
    companyName: "",
    designation: "",
    linkedIn: "",
    bio: "",
    emergencyContact: {
      name: "",
      relationship: "",
      phone: "",
      address: "",
    },
  });

  const [profileImage, setProfileImage] = useState(profileIMG);

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get("https://csuite-production.up.railway.app/api/user")
      .then((response) => {
        setProfileData(response.data);
        // If the user has a profile image stored in the database, set it here
        if (response.data.profilePic) {
          setProfileImage(response.data.profilePic);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("emergencyContact.")) {
      const field = name.split(".")[1];
      setProfileData((prevData) => ({
        ...prevData,
        emergencyContact: {
          ...prevData.emergencyContact,
          [field]: value,
        },
      }));
    } else {
      setProfileData({
        ...profileData,
        [name]: value,
      });
    }
  };

  const handleSaveClick = () => {
    setIsEditing(false);

    // Update user data via the API
    axios
      .put("https://csuite-production.up.railway.app/api/user", profileData)
      .then((response) => {
        console.log("User data updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(e.target.files[0]);

      // Upload the new profile image to the server and update the profileData state
      const formData = new FormData();
      formData.append("profilePic", e.target.files[0]);

      axios
        .post("https://csuite-production.up.railway.app/api/user/profile-pic", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Profile image updated successfully:", response.data);
          setProfileData((prevData) => ({
            ...prevData,
            profilePic: response.data.profilePic, // Assuming the API returns the updated profile image URL
          }));
        })
        .catch((error) => {
          console.error("Error updating profile image:", error);
        });
    }
  };

  return (
    <div className="profileContainer">
      <div className="profileBanner">
        <div className="profileBGBox">
          <span className="profileBGTxt">
            <h1>{profileData.designation}</h1>
            <h6>{profileData.companyName}</h6>
          </span>
          <img src={profileVector} alt="profileVector" className="profileBG" />
        </div>
        <div className="profileHeader">
          <div className="profileImage">
            <img src={profileImage} alt="Profile" className="" />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="imageUpload"
              />
            )}
          </div>
          <div className="profileHeaderInfo">
            <h2 className="profileName">{profileData.name}</h2>
            <p className="profileEmail">{profileData.email}</p>
          </div>
          <div className="profileEditBtn">
            <button onClick={isEditing ? handleSaveClick : handleEditClick}>
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
      <div className="profileContent">
        <div className="profileSection">
          <h5>General Information</h5>
          <div className="profileDetails">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={profileData.jobTitle}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>ID Card</label>
            <input
              type="text"
              name="idCard"
              value={profileData.idCard}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Address</label>
            <textarea
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Test Score</label>
            <input
              type="number"
              name="testScore"
              value={profileData.testScore}
              disabled
            />
          </div>
          <div className="profileSeperator"></div>
          <h5>Contact Details</h5>
          <div className="profileDetails profileSPLBox">
            <img src={phoneSVG} alt="phoneNumberSVG" />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails profileSPLBox">
            <img src={mailSVG} alt="mailSVG" />
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="profileSection">
          <h5>Professional Details</h5>
          <div className="profileDetails">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={profileData.companyName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={profileData.designation}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>LinkedIn</label>
            <input
              type="url"
              name="linkedIn"
              value={profileData.linkedIn}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Bio</label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileSeperator"></div>
          <h5>Emergency Contact</h5>
          <div className="profileDetails">
            <label>Full Name</label>
            <input
              type="text"
              name="emergencyContact.name"
              value={profileData.emergencyContact.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Relationship</label>
            <input
              type="text"
              name="emergencyContact.relationship"
              value={profileData.emergencyContact.relationship}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Phone Number</label>
            <input
              type="number"
              name="emergencyContact.phone"
              value={profileData.emergencyContact.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Address</label>
            <textarea
              name="emergencyContact.address"
              value={profileData.emergencyContact.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
