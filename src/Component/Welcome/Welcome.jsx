import React from "react";
import { useNavigate } from "react-router-dom";
import Indian_states_cities_list from "indian-states-cities-list";

import heroImage from "../../../src/hero.png"; // Import the image
import "./style.css";
const Welcome = () => {
  const navigate = useNavigate();
  console.log(Indian_states_cities_list.STATE_WISE_CITIES.Maharashtra);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate("/next-route"); // Navigate to the next route after form submission
  };
  return (
    <>
      <div className="img_container">
        <div className="center">
          <img
            className="hero_image"
            src={heroImage}
            alt="Welcome to Haqdarshak"
          />

          <button onClick={() => navigate("/language")} className="btn_next">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
