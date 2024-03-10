import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Mobile = () => {
  const navigate = useNavigate();

  const [mobileNumber, setMobileNumber] = useState("");

  const handleMobileNumberChange = (e) => {
    // Filter out non-numeric characters and limit length to 10 digits
    const inputMobileNumber = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobileNumber(inputMobileNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate("/otp_varification"); // Navigate to the next route after form submission
  };

  const isNextDisabled = mobileNumber.length !== 10; // Disable Next button if mobile number is not 10 digits

  return (
    <div className="main">
      <button onClick={() => navigate("/location")} className="back-button">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h4 className="headline">What is your mobile number?</h4>
      <div className="container-fluid">
        <form className="mx-auto location" onSubmit={handleSubmit}>
          <div className="radio-container">
            <div className="radio-button">
              <input
                className="pincode"
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="guide-text">
            <p>
              This is used to create an account in your name on the Haqdarshak
              app.
            </p>
          </div>
          <div className="next">
            <button
              type="submit"
              className="btn btn-primary mt-5"
              disabled={isNextDisabled}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mobile;
