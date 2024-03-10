import React from "react";
import Language from "./Component/Language/Language";
import LoginOptions from "./Component/LoginOptions/LoginOptions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Location from "./Component/Location/Location";
import Mobile from "./Component/Mobile Number/Mobile";
import OTP from "./Component/OTP/OTP";
import Details from "./Component/Details/Details";
import Success from "./Component/Success/Sucess";
import Welcome from "./Component/Welcome/Welcome";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/language" element={<Language />} />
        <Route exact path="/login_options" element={<LoginOptions />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/mobile_number" element={<Mobile />} />
        <Route exact path="/otp_varification" element={<OTP />} />
        <Route exact path="/personal_details" element={<Details />} />
        <Route exact path="/successfully_created" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
