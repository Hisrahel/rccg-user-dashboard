import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import members from "../assets/image/members.svg";
import announcement from "../assets/image/announcement.svg";
import events from "../assets/image/event.svg";
import logo from "../assets/image/rccglogo.webp";

function Dashboard() {
  return (
    <section className="dashboard">
      <SideBar />
      <div className="body-content">
        <TopBar />
        <div className="bottom-content">
          <h5>Welcome to RCCG, New Beginning Chapel Membership Portal</h5>
          <div className="row">
            <div className="col-md-4">
              <div className="dashboard-card">
                <div>
                  <h6>Total Members Today:</h6>
                  <h2 className="members">1,245</h2>
                  <p>
                    Total verified members in the church community on this
                    portal
                  </p>
                </div>
                <img src={members} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="dashboard-card">
                <div>
                  <h6>Unread Announcements</h6>
                  <h2 className="announce">03</h2>
                  <p>
                    Track unread announcements to stay updated and informed.
                  </p>
                </div>
                <img src={announcement} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="dashboard-card">
                <div>
                  <h6>Upcoming Events</h6>
                  <h2 className="event">00</h2>
                  <p>Quick insights into all upcoming events and attendance</p>
                </div>
                <img src={events} alt="" />
              </div>
            </div>
          </div>

          <div className="explore-card">
            <h5>Explore</h5>
            <div className="row">
              <div className="col-md-4">
                <div className="blue-card">
                  <img src={logo} alt="" />
                  <h6>Resources</h6>
                  <p className="text-white">
                    Tools and wisdom for building a strong, faith-filled life
                  </p>
                  <a href="/resources">Learn More</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blue-card">
                  <img src={logo} alt="" />
                  <h6>Singles' Fellowship & Growth</h6>
                  <p className="text-white">
                    A space for single adults to connect, serve, and thrive in
                    Christ.
                  </p>
                  <a href="/singlesfellowship">Learn More</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blue-card">
                  <img src={logo} alt="" />
                  <h6>Volunteering</h6>
                  <p className="text-white">
                    Serve with purpose in your church community.
                  </p>
                  <a href="/volunteering">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
