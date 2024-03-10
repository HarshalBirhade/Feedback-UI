import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const LoginOptions = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(""); // State to track selected option

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "newUser") {
      navigate("/location"); // Redirect to location for new user registration
    } else if (selectedOption === "phoneNumber") {
      navigate("/mobile_number"); // Redirect to mobile number for using phone number
    } else if (selectedOption === "yojanaCard") {
      // Handle Yojana card functionality if needed
    }
  };

  const isNextDisabled = selectedOption === ""; // Disable Next button if no option is selected

  return (
    <>
      <div className="main">
        <button onClick={() => navigate("/language")} className="back-button">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h4 className="headline">How do you want to login?</h4>
        <div className="container-fluid">
          <form className="mx-auto login" onSubmit={handleSubmit}>
            <div className="radio-container">
              <label className="radio-button">
                <input
                  type="radio"
                  name="login"
                  value="newUser"
                  checked={selectedOption === "newUser"}
                  onChange={handleOptionChange}
                />
                <span></span>
                Register me as a new user
              </label>
              <label className="radio-button">
                <input
                  type="radio"
                  name="login"
                  value="phoneNumber"
                  checked={selectedOption === "phoneNumber"}
                  onChange={handleOptionChange}
                />
                <span></span>
                Use my Phone Number
              </label>
              <label className="radio-button">
                <input
                  type="radio"
                  name="login"
                  value="yojanaCard"
                  checked={selectedOption === "yojanaCard"}
                  onChange={handleOptionChange}
                />
                <span></span>
                Use my Yojana Card
              </label>
            </div>
            <div className="next">
              <button
                type="submit"
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

export default LoginOptions;
