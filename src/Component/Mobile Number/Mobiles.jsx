import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../Firebase/setup";

const Mobile = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      console.log(confirmation);
      setUser(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      if (data) {
        console.log("Pass");
      } else {
        console.log("Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="phone-signn">
      <div className="phone-content">
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone("+" + phone)}
        />

        <button onClick={sendOtp}>Send Otp</button>
        <div id="recaptcha"></div>

        <input
          onChange={(e) => setOtp(e.target.value)}
          type="text"
          placeholder="Enter otp"
        />
        <button onClick={verifyOtp}>Varify Otp</button>
      </div>
    </div>
  );
};

export default Mobile;
