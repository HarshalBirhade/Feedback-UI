import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(""); // State to track selected option

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const isNextDisabled = selectedOption === ""; // Disable Next button if no option is selected

  return (
    <>
      <div className="main">
        <button
          className="back-button"
          onClick={() => navigate("/mobile_number")}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h4 className="headline">
          Do you want to proceed without OTP verification?
        </h4>
        <div className="container-fluid">
          <form className="mx-auto language">
            <div className="radio-container">
              <label className="radio-button">
                <input
                  type="radio"
                  name="language"
                  value="yes"
                  checked={selectedOption === "yes"}
                  onChange={handleOptionChange}
                />
                <span></span>
                Yes
              </label>
              <label className="radio-button">
                <input
                  type="radio"
                  name="language"
                  value="no"
                  checked={selectedOption === "no"}
                  onChange={handleOptionChange}
                />
                <span></span>
                No, I want to complete OTP verification
              </label>

              <div className="guide-text">
                <p>
                  Proceed without OTP if you live in an area with low network
                  connectivity.
                </p>
              </div>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("/personal_details")}
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

export default OTP;
