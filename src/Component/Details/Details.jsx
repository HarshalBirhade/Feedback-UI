import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Details = () => {
  const navigate = useNavigate();
  const [birthdate, setBirthdate] = useState(null);
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState(""); // State to store selected gender

  const handleAgeChange = (e) => {
    const inputAge = e.target.value.replace(/\D/g, "").slice(0, 3); // Remove non-numeric characters and limit to 3 digits
    setAge(inputAge);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value); // Update selected gender
  };

  const handleNameChange = (e) => {
    setName(e.target.value); // Update name
  };

  // Function to check if all required fields are filled
  const isNextDisabled = !name || !gender || (!birthdate && !age);

  return (
    <>
      <div className="main">
        <button
          className="back-button"
          onClick={() => navigate("/otp_varification")}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h4 className="headline">Personal Details</h4>
        <div className="container-fluid">
          <form className="mx-auto language">
            <div className="radio-container">
              <label htmlFor="name" style={{ marginRight: "90%" }}>
                Name
              </label>
              <div className="radio-button">
                <input
                  className="pincode"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <label htmlFor="name" style={{ marginRight: "90%" }}>
                Gender
              </label>
              <div className="radio-button">
                <label className="radio-button">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleGenderChange}
                  />
                  <span></span>
                  Male
                </label>
                <label className="radio-button">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleGenderChange}
                  />
                  <span></span>
                  Female
                </label>
                <label className="radio-button">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={handleGenderChange}
                  />
                  <span></span>
                  Other
                </label>
              </div>
              <label htmlFor="name" style={{ marginRight: "80%" }}>
                DOB/Age
              </label>
              <div className="radio-button">
                <DatePicker
                  selected={birthdate}
                  onChange={(date) => setBirthdate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Enter your birthdate"
                  className="pincode"
                  required={!age} // Required if age field is empty
                />
              </div>
              <label htmlFor="age" style={{ marginRight: "100%" }}>
                or
              </label>
              <div className="radio-button">
                <input
                  className="pincode"
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={age}
                  onChange={handleAgeChange}
                  max="999"
                  required={!birthdate} // Required if birthdate field is empty
                />
              </div>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("/successfully_created")}
                className={`btn btn-primary mt-5 ${
                  isNextDisabled ? "disabled" : ""
                }`}
                disabled={isNextDisabled}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Details;
