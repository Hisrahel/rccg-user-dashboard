import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

function SettingsPrivacy() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("johnsmith@gmail.com");
  const [code, setCode] = useState(Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const closeModal = () => {
    setShowModal(false);
    setStep(1);
  };

  const renderModalContent = () => {
    switch (step) {
      case 1: // Change password - enter email
        return (
          <div className="modal-conten">
            <h5>Change Password</h5>
            <p>
              Enter the email you used in creating the account, and we will send
              you a mail with instructions to change your password.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="form-control mb-3"
            />
            <button
              className="btn btn-primary w-100"
              onClick={() => setStep(2)}
            >
              Send Email
            </button>
          </div>
        );

      case 2: // Email sent
        return (
          <div className="auth-modal-content">
            <h5>Email Sent</h5>
            <p>
              We have sent you an email at <b>{email}</b>. <br />
              Check your inbox and follow the instructions to reset your
              password.
            </p>
            <a href="#" onClick={() => setStep(1)}>
              Wrong email? Change Email
            </a>
            <br />
            <a href="#">Resend Email</a>
          </div>
        );

      case 3: // Verify email
        return (
          <div className="auth-modal-content">
            <h5>Verify Email Address</h5>
            <p>
              Enter the email you used in creating the account, and we will send
              you a code to verify.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-3"
            />
            <button
              className="btn btn-primary w-100"
              onClick={() => setStep(4)}
            >
              Verify Email
            </button>
          </div>
        );

      case 4: // Enter verification code
        return (
          <div className="auth-modal-content">
            <h5>Enter Verification Code</h5>
            <p>
              We have sent you a code at <b>{email}</b>.
            </p>
            <div className="d-flex justify-content-between mb-3">
              {code.map((digit, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleCodeChange(e.target.value, i)}
                  className="auth-code-inputs"
                />
              ))}
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={() => setStep(5)}>
                Verify Email
              </button>
            </div>
          </div>
        );

      case 5: // New password
        return (
          <div className="auth-modal-content">
            <h5>Change Password</h5>
            <p>Enter your new password below</p>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control mb-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control mb-3"
            />
            <button className="btn btn-primary w-100" onClick={closeModal}>
              Change Password
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="dashboard">
      <SideBar isOpen={sidebarOpen} />
      <div className="body-content">
        <TopBar onToggleSidebar={toggleSidebar} />
        <div className="bottom-content">
          <h5>Account Settings</h5>
          <div className="settings-wrap row">
            <div className="col-md-3">
              <div className="settings-side-bar">
                <a href="/settings">My Profile</a>
                <a href="/notificationsettings">Notifications</a>
                <a href="/settingsprivacy" className="active">
                  Settings & Privacy
                </a>
                <a href="/login">Delete Account</a>
                <p class="pt-2">
                  <small>
                    Please read our{" "}
                    <span
                      onClick={() =>
                        (window.location.href =
                          "http://rccgc.netlify.app/privacy.html")
                      }
                      className="privacy-link"
                    >
                      <small>
                        <u>Privacy Notice</u>
                      </small>
                    </span>{" "}
                    to learn how we protect your personal data.
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="settings-content">
                <h6>Security & Privacy Settings</h6>
                <p className="text-secondary pt-1 pb-2">
                  Manage your account security and devices
                </p>
                <hr className="my-4" />
                <div className="verify-email">
                  <div>
                    <h6 className="pt-2">Verify Email Address</h6>
                    <p className="text-secondary">
                      Verify your email address when changed
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setStep(3);
                    }}
                  >
                    Verify
                  </button>
                </div>
                <div className="verify-email mt-5">
                  <div>
                    <h6 className="pt-2">Change Password</h6>
                    <p className="text-secondary">
                      Change your password to update and protect your account
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setStep(1);
                    }}
                  >
                    Change
                  </button>
                </div>
                <hr className="my-4" />
                <div className="notification-settings">
                  <span>
                    <div className="dotted">
                      <div></div>
                      Allow my profile to appear in search results
                    </div>
                    <input type="checkbox" defaultChecked />
                  </span>
                </div>
                <div className="profile-buttons">
                  <button type="button">Cancel</button>
                  <button type="submit">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="auth-modal-overlay">
          <div className="auth-modal-box">{renderModalContent()}</div>
        </div>
      )}
    </section>
  );
}

export default SettingsPrivacy;
