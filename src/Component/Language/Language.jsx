import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Language = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(""); // State to track selected language

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const isNextDisabled = selectedLanguage === ""; // Disable Next button if no language is selected

  return (
    <>
      <div className="main">
        <button className="back-button" onClick={() => navigate("/")}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h4 className="headline">Which language do you prefer?</h4>
        <div className="container-fluid">
          <form className="mx-auto language">
            <div className="radio-container">
              <label className="radio-button">
                <input
                  type="radio"
                  name="language"
                  value="english"
                  checked={selectedLanguage === "english"}
                  onChange={handleLanguageChange}
                />
                <span></span>
                English
              </label>
              <label className="radio-button">
                <input
                  type="radio"
                  name="language"
                  value="hindi"
                  checked={selectedLanguage === "hindi"}
                  onChange={handleLanguageChange}
                />
                <span></span>
                हिंदी
              </label>
              <label className="radio-button">
                <input
                  type="radio"
                  name="language"
                  value="kannada"
                  checked={selectedLanguage === "kannada"}
                  onChange={handleLanguageChange}
                />
                <span></span>
                ಕನ್ನಡ
              </label>
              <div className="guide-text">
                <p>
                  This allows you to experience the app in a language of your
                  preference.
                </p>
              </div>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("/login_options")}
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

export default Language;
