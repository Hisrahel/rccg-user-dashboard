import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

function ManageSignUp() {
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
    // {
    //   id: 4,
    //   title: "Youth Weekend Conference: 12-14 July",
    //   roles: "Event Setup, Registration Desk, Logistics, Prayer Team",
    //   requirements: "Must be 18+ for logistics team",
    //   hours: "4+ hours",
    // },
    // {
    //   id: 5,
    //   title: "Children's Church Support - Every Sunday",
    //   roles: "Class Assistants, Activity Leads",
    //   requirements: "Background check & church membership",
    //   hours: "2+ hours",
    // },
    // {
    //   id: 6,
    //   title: "Community Food Drive - 28 July",
    //   roles: "Packing, Distribution, Cleanup",
    //   requirements: "None",
    //   hours: "3+ hours",
    // },
  ];

  const openModal = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOpportunity(null);
  };

  return (
    <section className="dashboard">
      <SideBar />
      <div className="body-content">
        <TopBar />
        <div className="bottom-content">
          <div className="prayer-title">
            <span>Volunteering</span>
          </div>
          <div className="volunteer-head">
            <span className="fs-5">Volunteer Signups</span>
          </div>

          {/* Volunteer Cards */}
          <div className="row mt-4">
            {opportunities.map((op) => (
              <div className="col-md-4 mb-4" key={op.id}>
                <div className="volunteer-signup-card">
                  <div>Signed Up</div>
                  <h6>{op.title}</h6>
                  <span>
                    <b>Roles Needed</b>: {op.roles}
                  </span>
                  <span>
                    <b>Special Requirements</b>: {op.requirements}
                  </span>
                  <div>{op.hours}</div>
                  <div className="volunteer-signup-button">
                    <button onClick={() => openModal(op)}>Edit</button>
                    <button>Cancel</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4 className="pb-1">Edit Sign Up</h4>
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

              <div className="modalbutton">
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
                {selectedOpportunity && (
                  <button type="submit">
                    <a href="/managesignup">Update</a>
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

export default ManageSignUp;
