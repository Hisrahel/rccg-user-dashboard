import { useState } from "react";
import "../css/style.css";
import logo from "../assets/image/rccglogo.webp";
import recaptcha from "../assets/image/recaptchaLogo.webp";

export default function Signup() {
  // Track the current step
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <section className="login">
      <div className="containerfluid">
        <div className="row loginrow">
          <div className="col-md-6">
            <div className="signupbg">
              <img src={logo} alt="image" />
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
            <div className="cardsign">
              <div className="accountdiv">
                <h5>Create an Account</h5>
                <h6>{step}/2</h6>
              </div>

              {step === 1 && (
                <>
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control"
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter a password"
                    className="form-control"
                  />
                  <label>Profession</label>
                  <select className="form-control">
                    <option value="">Select a profession</option>
                    <option value="banker">Banker</option>
                    <option value="lawyer">Lawyer</option>
                    <option value="teacher">Teacher</option>
                    <option value="pastor">Pastor</option>
                  </select>
                  <p className="pt-4 pb-2">
                    <small>
                      Please read our{" "}
                      <a href="/">
                        <small>
                          <u>Privacy Notice</u>
                        </small>
                      </a>{" "}
                      to learn how we protect your personal data.
                    </small>
                  </p>
                  <button className="mb-4" onClick={handleNext}>
                    Next
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <label>Location</label>
                  <select className="form-control">
                    <option value="">Select your Location</option>
                    <option value="westham">West Ham</option>
                    <option value="manchester">Manchester</option>
                    <option value="liverpool">Liverpool</option>
                    <option value="leicester">Leicester</option>
                  </select>
                  <label>Bio</label>
                  <textarea
                    name=""
                    id=""
                    rows="4"
                    className="form-control"
                    placeholder="Enter a short bio of yourself"
                  ></textarea>
                  <label>Short Testimony</label>
                  <textarea
                    name=""
                    id=""
                    rows="4"
                    className="form-control"
                    placeholder="Enter a short testimony"
                  ></textarea>
                  <div class="recaptcha">
                    <div class="checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>I'm not a robot</span>
                    </div>
                    <img src={recaptcha} alt="image" />
                  </div>
                  <p className="">
                    <small>
                      Please read our
                      <a href="/">
                        {" "}
                        <small>
                          <u>Privacy Notice</u>
                        </small>
                      </a>{" "}
                      to learn how we protect your personal data.
                    </small>
                  </p>

                  <div className="signupbuttons">
                    <button>
                      <a href="/">Create Account</a>
                    </button>
                    <button className="mb-4">
                      <a href="/">Skip & Proceed</a>
                    </button>
                  </div>
                </>
              )}

              <p>
                <small>
                  {" "}
                  Already a member of this Membership Portal?{" "}
                  <a href="/login" className="text-primary">
                    <small>
                      <u>Login Instead</u>
                    </small>
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
