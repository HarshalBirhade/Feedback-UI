import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Indian_states_cities_list from "indian-states-cities-list";

const Location = () => {
  const navigate = useNavigate();
  const states = Object.keys(Indian_states_cities_list.STATE_WISE_CITIES);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    setSelectedCity(""); // Reset city when state changes
  };

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
  };

  const handlePincodeChange = (e) => {
    // Filter out non-numeric characters
    const inputPincode = e.target.value.replace(/\D/g, "");
    setPincode(inputPincode);
  };

  // Function to check if all required fields are filled
  const isNextDisabled = !selectedState || !selectedCity || !pincode;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate("/next-route"); // Navigate to the next route after form submission
  };

  return (
    <div className="main">
      <button
        onClick={() => navigate("/login_options")}
        className="back-button"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h4 className="headline">Where are you from?</h4>
      <div className="container-fluid">
        <form className="mx-auto location" onSubmit={handleSubmit}>
          <div className="radio-container">
            <div className="radio-button">
              <select
                value={selectedState}
                onChange={handleStateChange}
                required
              >
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            {selectedState && (
              <div className="radio-button">
                <select
                  value={selectedCity}
                  onChange={handleCityChange}
                  required
                >
                  <option value="">Select City</option>
                  {Indian_states_cities_list.STATE_WISE_CITIES[
                    selectedState
                  ].map((city, index) => (
                    <option key={index} value={city.label}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {selectedCity && (
              <div className="radio-button">
                <input
                  className="pincode"
                  type="text"
                  name="pincode"
                  id="pincode"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={handlePincodeChange}
                  required
                />
              </div>
            )}
          </div>
          <div className="next">
            <button
              onClick={() => navigate("/mobile_number")}
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
  );
};

export default Location;
