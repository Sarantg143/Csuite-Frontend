import React, { useState, useEffect } from "react";
import "./Profile.css";
import profileIMG from "../Assets/Images/profileImage.jpeg";
import profileVector from "../Assets/Images/profileVector.png";
import phoneSVG from "../Assets/SVG/phoneSVG.svg";
import mailSVG from "../Assets/SVG/mailSVG.svg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [profileImage, setProfileImage] = useState(profileIMG);
  const [profileBanner, setProfileBanner] = useState(profileVector);
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [selectedProfileBanner, setSelectedProfileBanner] = useState(null);

  useEffect(() => {
    fetch("https://csuite-production.up.railway.app/api/user")
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data.user);
        if (data.user.profilePic) {
          setProfileImage(`data:image/jpeg;base64,${data.user.profilePic}`);
        }
        if (data.user.profileBanner) {
          setProfileBanner(`data:image/jpeg;base64,${data.user.profileBanner}`);
        }
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

  const handleProfileImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedProfileImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleProfileBannerChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedProfileBanner(file);
      const reader = new FileReader();
      reader.onload = (e) => setProfileBanner(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    const formData = new FormData();
    for (const key in profileData) {
      formData.append(key, profileData[key]);
    }
    if (selectedProfileImage) {
      formData.append("profilePic", selectedProfileImage);
    }
    if (selectedProfileBanner) {
      formData.append("profileBanner", selectedProfileBanner);
    }
    await fetch(`https://csuite-production.up.railway.app/api/user/${profileData._id}`, {
      method: "PUT",
      body: formData,
    });
  };

  return (
    <div className="profileContainer">
      <div className="profileBanner">
        <div className="profileBGBox">
          <span className="profileBGTxt">
            <h1>{profileData.designation}</h1>
            <h6>{profileData.companyName}</h6>
          </span>
          <img src={profileBanner} alt="Profile Banner" className="profileBG" />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileBannerChange}
              className="bannerUpload"
            />
          )}
        </div>
        <div className="profileHeader">
          <div className="profileImage">
            <img src={profileImage} alt="Profile" className="" />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
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
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="profileSection">
          <h5>Emergency Contact</h5>
          <div className="profileDetails">
            <label>Name</label>
            <input
              type="text"
              name="emergencyContact.name"
              value={profileData.emergencyContact?.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Relationship</label>
            <input
              type="text"
              name="emergencyContact.relationship"
              value={profileData.emergencyContact?.relationship}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Phone Number</label>
            <input
              type="text"
              name="emergencyContact.phone"
              value={profileData.emergencyContact?.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileDetails">
            <label>Address</label>
            <input
              type="text"
              name="emergencyContact.address"
              value={profileData.emergencyContact?.address}
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
