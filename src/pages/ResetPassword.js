import { useRef } from "react";
import "../css/style.css";
import logo from "../assets/image/rccglogo.webp";

export default function ResetPassword() {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <section className="login">
      <div className="containerfluid">
        <div className="row loginrow">
          <div className="col-md-6">
            <div className="loginbg">
              <img src={logo} alt="RCCG Logo" />
              <h5 className="py-5">
                Welcome to RCCG New Beginners Chapel, Bournemouth, UK
              </h5>
              <p className="text-white">
                RCCG Bournemouth Membership Portal has been built to create a
                community where the church members can interact with each other
                seamlessly.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-5 resetcard">
              <h5>Reset Password</h5>
              <p>
                We have sent you a code at <b>user@email.com</b>
              </p>

              {/* OTP Section */}
              <div className="otp-inputs">
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    type="tel"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[i] = el)}
                    className="otp-box"
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                  />
                ))}
              </div>

              <p>
                Didn't receive a code?{" "}
                <a href="/" className="text-primary">
                  <u>Click to resend</u>
                </a>
              </p>
              <button className="btn mt-3">
                <a href="/newPassword">Reset Password</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
