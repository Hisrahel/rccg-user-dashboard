import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import man from "../assets/image/man.svg";
import NotificationAlert from "../components/NotificationAlert";

function Settings() {
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:");

    // Show success notification
    setNotification({
      message: "Changes Applied Successfully",
      type: "success",
    });

    // Hide after 3s
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section className="dashboard">
      <SideBar />
      <div className="body-content">
        <TopBar />
        <div className="bottom-content">
          <h5>Account Settings</h5>
          <div className="settings-wrap row">
            <div className="col-md-3">
              <div className="settings-side-bar">
                <a href="/settings" className="active">
                  My Profile
                </a>
                <a href="/notificationsettings">Notifications</a>
                <a href="/settingsprivacy">Settings & Privacy</a>
                <a href="/login">Delete Account</a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="settings-content">
                <h5>My Profile Settings</h5>
                <div className="profile-header">
                  <img src={man} alt="" />
                  <div>
                    <div className="profile-header-buttons">
                      <button>Upload</button>
                      <button>Remove</button>
                    </div>
                    <span>
                      An image of at most 5mb is allowed <br /> PNG, JPG formats
                      can be uploaded.
                    </span>
                  </div>
                </div>
                <form onSubmit={handleSubmit} action="" className="mt-3">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    value="John"
                    disabled
                    className="form-control"
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Email</label>
                      <div className="verify-icon">
                        <input
                          type="email"
                          value="johnsmith@gmail.com"
                          className="form-control"
                          disabled
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                            stroke="#00A827"
                            stroke-width="1.5"
                          />
                          <path
                            d="M7 11.5L9.5 14L15 8"
                            stroke="#00A827"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M13.9994 14L8 8M8.00064 14L14 8"
                            stroke="#FF0000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                            stroke="#FF0000"
                            stroke-width="1.5"
                          />
                        </svg> */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">Phone Number</label>
                      <input
                        type="email"
                        value="+44 1234 567 8900"
                        className="form-control"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Location</label>
                      <select name="" id="" className="form-control">
                        <option value="Dorset, UK">Dorset, UK</option>
                        <option value="Dorset, UK">Dorset, UK</option>
                        <option value="Dorset, UK">Dorset, UK</option>
                        <option value="Dorset, UK">Dorset, UK</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">Date of Birth</label>
                      <input
                        type="date"
                        value="02/06/2025"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label htmlFor="">Bio (Optional)</label>
                      <textarea
                        name=""
                        id=""
                        rows="7"
                        className="form-control"
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
                      ></textarea>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">Short Testimony</label>
                      <textarea
                        name=""
                        id=""
                        rows="7"
                        className="form-control"
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
                      ></textarea>
                    </div>
                  </div>
                  <span className="text-secondary">Social Media Links</span>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Socail Media</label>
                      <select name="" id="" className="form-control">
                        <option>Choose Social Media</option>
                        <option>FaceBook</option>
                        <option>Instagram</option>
                        <option>TikTok</option>
                        <option>WhatsApp</option>
                        <option>X (Twitter)</option>
                        <option>LinkdIn</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">Link</label>
                      <input
                        type="text"
                        value="Enter Link"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="add-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M11 7V15M15 11L7 11"
                        stroke="#0045E8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                        stroke="#0045E8"
                        stroke-width="1.5"
                      />
                    </svg>
                    <span>Add Another Social Media</span>
                  </div>

                  <div className="profile-buttons">
                    <button type="button">Cancel</button>
                    <button type="submit">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {notification && (
        <NotificationAlert
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </section>
  );
}

export default Settings;
