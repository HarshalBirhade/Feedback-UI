import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Details = () => {
  const navigate = useNavigate();
  const [birthdate, setBirthdate] = useState(null);
  const [age, setAge] = useState("");

  const handleAgeChange = (e) => {
    const inputAge = e.target.value.replace(/\D/g, "").slice(0, 3); // Remove non-numeric characters and limit to 3 digits
    setAge(inputAge);
  };

  return (
    <>
      <div className="main">
        <button
          className="back-button"
          onClick={() => navigate("/personal_details")}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h4 className="headline">Haqdarshak</h4>
        <div className="container-fluid">
          <form className="mx-auto language">
            <div className="radio-container">
              <h6 style={{ color: "black" }}>Welcome To</h6>
              <h1>हकदर्शक</h1>
              <h1>Haqdarshak</h1>
              <h7 style={{ color: "black" }}>
                Your profile has been created successfully!
              </h7>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("/successfully_created")}
                className="btn btn-primary mt-5"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Details;
