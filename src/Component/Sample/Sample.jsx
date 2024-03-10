import "./sample.css";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../Firebase/setup";

const Sample = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");
  const [showSendOtpButton, setShowSendOtpButton] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      console.log(confirmation);
      setUser(confirmation);
      setShowSendOtpButton(false);
      setShowOtpInput(true);
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
    <div className="sample">
      <div className="phone-input-wrapper">
        <PhoneInput
          style={{ marginTop: "10%" }}
          country={"in"}
          value={phone}
          onChange={(phone) => {
            setPhone("+" + phone);
            setShowSendOtpButton(phone.length > 0);
          }}
          inputStyle={{
            border: "none",
            backgroundColor: "#e5e2de",
          }}
        />
      </div>
      <div id="recaptcha"></div>
      {showSendOtpButton && (
        <button className="sample-btn" onClick={sendOtp}>
          Send Otp
        </button>
      )}

      {showOtpInput && (
        <>
          <input
            onChange={(e) => setOtp(e.target.value)}
            type="text"
            placeholder="Enter otp"
          />
          <button className="sample-btn" onClick={verifyOtp}>
            Verify Otp
          </button>
        </>
      )}
    </div>
  );
};

export default Sample;
