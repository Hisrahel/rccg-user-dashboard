import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import NotificationAlert from "../components/NotificationAlert";

function NotificationSettings() {
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
                <a href="/settings">My Profile</a>
                <a href="/notificationsettings" className="active">
                  Notifications
                </a>
                <a href="/settingsprivacy">Settings & Privacy</a>
                <a href="/login">Delete Account</a>
                 <p class="pt-2">
                  <small>
                    Please read our{" "}
                    <span
                      onClick={() =>
                        (window.location.href =
                          "http://rccgc.netlify.app/privacy.html")
                      } className="privacy-link"
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
                <h5>Notification Settings</h5>
                <p className="text-secondary">
                  Choose how and when you want to stay updated on church
                  activities, messages, and connections
                </p>
                <hr className="my-4" />
                <form onSubmit={handleSubmit} action="">
                  <h6>What would you like to be notified about?</h6>
                  <div className="notification-settings">
                    <span>
                      <div className="dotted">
                        <div></div>
                        Church Announcements
                      </div>
                      <input type="checkbox" name="" id="" checked />
                    </span>
                    <span>
                      <div className="dotted">
                        <div></div>
                        Event Reminders
                      </div>
                      <input type="checkbox" name="" id="" checked />
                    </span>
                    <span>
                      {" "}
                      <div className="dotted">
                        <div></div>
                        Giving & Donations
                      </div>
                      <input type="checkbox" name="" id="" checked />
                    </span>
                    <span>
                      <div className="dotted">
                        <div></div>
                        Others
                      </div>
                      <input type="checkbox" name="" id="" />
                    </span>
                  </div>
                  <hr className="my-4" />
                  <h6>Notification Channels (Select All That Apply)</h6>
                  <div className="notification-settings">
                    <span>
                      <div className="dotted">
                        <div></div>
                        In-App (When logged in)
                      </div>
                      <input type="checkbox" name="" id="" checked />
                    </span>
                    <span>
                      <div className="dotted">
                        <div></div>
                        Email
                      </div>
                      <input type="checkbox" name="" id="" checked />
                    </span>
                    <span>
                      <div className="dotted">
                        <div></div>
                        SMS
                      </div>
                      <input type="checkbox" name="" id="" checked />
                    </span>
                  </div>
                  <hr className="my-4" />
                  <h6 className="pb-2">Notification Behaviour</h6>
                  <div className="notification-settings">
                    <span>
                      <div className="dotted">
                        <div></div>
                        Mark as read when opened
                      </div>
                      <input type="checkbox" name="" id="" checked />
                    </span>
                    <span>
                      <div className="dotted">
                        <div></div>
                        Auto delete notification after 30 days
                      </div>

                      <input type="checkbox" name="" id="" />
                    </span>
                    <span>
                      <div className="dotted">
                        <div></div>
                        Show a confirmation before deleting a notification
                      </div>
                      <input type="checkbox" name="" id="" checked />
                    </span>
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

export default NotificationSettings;
