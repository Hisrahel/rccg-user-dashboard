import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import inter from "../assets/image/inter.svg";
import note from "../assets/image/note.svg";

function Prayer() {
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
          <div className="prayer-title">
            <span>Prayer & Support Network</span>
            <a href="/prayerhistory">
              <u>View Prayer Requests</u>
            </a>
          </div>
          <div className="burdens-card">
            <div className="col-md-5">
              <h5 className="burdens-card-head">
                Share Your Burdens. Receive Prayer.
              </h5>
              <p>
                We believe in the power of prayer and the strength of community.
                This space allows you to share your prayer requests and trust
                that our intercessory teams will stand with you in faith and
                love.
              </p>

              <img src={inter} alt="" />
              <h6>Intercessory Responses</h6>
              <p>
                Once you've submitted your request, our dedicated intercessory
                team will begin praying over it. You may receive words of
                encouragement, scriptures, or messages of support right here on
                the portal.
              </p>

              <img src={note} alt="" />
              <h6>Notes</h6>
              <ul>
                <li>
                  All prayer requests are reviewed before being shared.
                  <li>You may choose to remain anonymous.</li>
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              <div className="submit-card">
                <h5>Submit a Prayer Request</h5>
                <div className="sharediv">
                  <input type="checkbox" name="" id="" />
                  <span>Share Anonymously</span>
                </div>
                <label htmlFor="" className="pb-2">
                  Your Prayer Request
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="9"
                  className="form-control"
                  placeholder="Enter your prayer request"
                ></textarea>
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
                <div className="sharebutton">
                  <a href="/prayerhistory" className="text-white">
                    <small>Share Your Prayer Request</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prayer;
