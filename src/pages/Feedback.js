import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import feedback from "../assets/image/feedback.webp";
import NotificationAlert from "../components/NotificationAlert";

function Feedback() {
  const [formData, setFormData] = useState({
    type: "",
    email: "",
    message: "",
    anonymous: false,
  });

  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show success notification
    setNotification({ message: "Feedback Sent Successfully", type: "success" });

    // Hide after 3s
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section className="dashboard">
      <SideBar />
      <div className="body-content">
        <TopBar />
        <div className="bottom-content">
          <div className="prayer-title">
            <span>Send a Feedback</span>
          </div>
          <div className="burdens-card">
            <div className="row burdenrow">
              <div className="col-md-5 px-4">
                <h5 className="burdens-card-head">Send Us Your Feedback</h5>
                <p>
                  We would love to hear from you. Your feedback helps us serve
                  you better and continue building a spiritually enriching
                  church community.
                </p>
                <img src={feedback} alt="Feedback" width="90%" />
                <h6 className="pt-5">Note:</h6>
                <p>
                  All feedback will be treated with confidentiality. If you'd
                  like a response, kindly include your contact details.
                </p>
              </div>
              <div className="col-md-6">
                <div className="donationcard">
                  <h5>Feedback Form</h5>
                  <form onSubmit={handleSubmit} className="donationform">
                    <label>Feedback Type</label>
                    <select
                      name="type"
                      className="form-control"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="">Select the type of your feedback</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="compliment">Compliment</option>
                      <option value="complaint">Complaint</option>
                      <option value="testimony">Testimony</option>
                      <option value="other">Other</option>
                    </select>

                    <label>
                      Email Address <small>(optional, for follow-up)</small>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <label className="pb-2">Your Feedback</label>
                    <textarea
                      name="message"
                      cols="30"
                      rows="9"
                      className="form-control"
                      placeholder="Input your feedback"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>

                    <div className="sharediv mb-4">
                      <input
                        type="checkbox"
                        name="anonymous"
                        checked={formData.anonymous}
                        onChange={handleChange}
                      />
                      <span>Send my Feedback Anonymously</span>
                    </div>

                    <div className="mb-4">
                      <button type="submit" className="donatebutton">
                        Send Feedback
                      </button>
                    </div>
                  </form>
                </div>
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

export default Feedback;
