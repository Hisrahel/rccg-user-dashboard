import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import signupsvg from "../assets/image/signupsvg.svg";
import handupsvg from "../assets/image/handsupsvg.svg";

function Volunteering() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const opportunities = [
    {
      id: 1,
      title: "Youth Weekend Conference: 12-14 July",
      roles: "Event Setup, Registration Desk, Logistics, Prayer Team",
      requirements: "Must be 18+ for logistics team",
      hours: "4+ hours",
    },
    {
      id: 2,
      title: "Children's Church Support - Every Sunday",
      roles: "Class Assistants, Activity Leads",
      requirements: "Background check & church membership",
      hours: "2+ hours",
    },
    {
      id: 3,
      title: "Community Food Drive - 28 July",
      roles: "Packing, Distribution, Cleanup",
      requirements: "None",
      hours: "3+ hours",
    },
  ];

  const openModal = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOpportunity(null);
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
          <div className="prayer-title">
            <span>Volunteering</span>
          </div>
          <div className="volunteer-head">
            <span className="fs-5">Current Volunteer Opportunities</span>
            <a href="/allvolunteer">
              <u>View All</u>
            </a>
          </div>

          {/* Volunteer Cards */}
          <div className="row mt-4">
            {opportunities.map((op) => (
              <div className="col-md-4" key={op.id}>
                <div className="volunteer-card">
                  <h6>{op.title}</h6>
                  <span>
                    <b>Roles Needed</b>: {op.roles}
                  </span>
                  <span>
                    <b>Special Requirements</b>: {op.requirements}
                  </span>
                  <div>{op.hours}</div>
                  <div className="volunteer-button">
                    <button onClick={() => openModal(op)}>Sign Up</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="volunteer-signup row">
            <div className="col-md-5">
              <img src={signupsvg} alt="" />
              <h5 className="py-4">Sign Up to Serve</h5>
              <span>When you click "Sign Up", you'll be asked to</span>
              <ul>
                <li>Confirm your name and contact info</li>
                <li>Choose your preferred time slot</li>
                <li>Accept the volunteer commitment agreement</li>
              </ul>
              <button
                className="volunteerSignup"
                onClick={() => setShowModal(true)}
              >
                My Volunteer Signups
              </button>
            </div>
            <div className="col-md-5">
              <img src={handupsvg} alt="" />
              <h5 className="py-4">Manage Your Volunteering</h5>
              <ul>
                <li>Update your availability or assigned roles anytime</li>
                <li>View upcoming commitments in your member portal</li>
                <li>Get notified of your signed up volunteering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4 className="pb-1">Sign Up/Volunteer</h4>
            <h6>
              {selectedOpportunity
                ? `${selectedOpportunity.title}`
                : "My Volunteer Signups"}
            </h6>

            <form>
              {selectedOpportunity && (
                <>
                  <label>Confirm name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />

                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />

                  <label>Select volunteer roles</label>
                  <select className="selectroles form-control">
                    <option>Select Available Roles</option>
                    <option>Chorister</option>
                    <option>Media</option>
                    <option>Protocol</option>
                    <option>Welfare</option>
                    <option>Logistics</option>
                  </select>
                  <label>Choose available hours</label>
                  <select className="selectroles form-control">
                    <option>Choose Hours</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                  <label>Do you have any relevant skills or experience?</label>
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    placeholder="Enter relevant skills"
                    className="form-control"
                  ></textarea>
                  <div className="confirm">
                    <input type="checkbox" id="agreement" />
                    <label className="form-check-label" htmlFor="agreement">
                      I confirm my availability and willingness to serve for
                      this opportunity.
                    </label>
                  </div>
                  <div className="confirm">
                    <input type="checkbox" id="agreement" />
                    <label className="form-check-label" htmlFor="agreement">
                      I agree to attend any necessary briefings or training
                      related to this role.
                    </label>
                  </div>
                </>
              )}

              {!selectedOpportunity && (
                <p>
                  You don't have any active signups yet. Once you sign up for a
                  volunteering role, it will appear here.
                </p>
              )}

              <div className="modalbutton">
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
                {selectedOpportunity && (
                  <button type="submit">
                    <a href="/managesignup">Signup</a>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Volunteering;
