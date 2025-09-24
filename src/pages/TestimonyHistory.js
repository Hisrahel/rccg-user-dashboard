import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import man from "../assets/image/man.svg";

function TestimonyHistory() {
  const requests = [
    {
      name: "ADDED TO FEATURES",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      color: "#20A100",
    },
    {
      name: "NOT ADDED TO FEATURES",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      color: "#A10000",
    },
    {
      name: "ADDED TO FEATURES",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      color: "#20A100",
    },
    {
      name: "NOT ADDED TO FEATURES",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      color: "#A10000",
    },
    {
      name: "ADDED TO FEATURES",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      color: "#20A100",
    },
  ];

  return (
    <section className="dashboard">
      <SideBar />
      <div className="body-content">
        <TopBar />
        <div className="bottom-content">
          <h5>Your Testimonies History</h5>
          <div className="row">
            {requests.map((req, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="request-card">
                  <img src={man} alt="user" />
                  <p className="pt-3">
                    <small>{req.text}</small>
                  </p>
                  <p>
                    <small style={{ color: req.color, fontWeight: "bold" }}>
                      {req.name}
                    </small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonyHistory;
