import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import speakersvg from "../assets/image/speakersvg.svg";
import dots from "../assets/image/dots.svg";
import eventsvg from "../assets/image/eventsvg.svg";
import donationsvg from "../assets/image/donation-svg.svg";
import buildsvg from "../assets/image/buildsvg.svg";

export default function Notifications() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
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
          <div className="notification-wrap">
            <span>Notifications</span>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M19.8175 6.14139L19.3239 5.28479C18.9506 4.63696 18.764 4.31305 18.4464 4.18388C18.1288 4.05472 17.7696 4.15664 17.0513 4.36048L15.8311 4.70418C15.3725 4.80994 14.8913 4.74994 14.4726 4.53479L14.1357 4.34042C13.7766 4.11043 13.5004 3.77133 13.3475 3.37274L13.0136 2.37536C12.794 1.71534 12.6842 1.38533 12.4228 1.19657C12.1615 1.00781 11.8143 1.00781 11.1199 1.00781L10.0051 1.00781C9.31078 1.00781 8.9636 1.00781 8.70223 1.19657C8.44085 1.38533 8.33106 1.71534 8.11149 2.37536L7.77753 3.37274C7.62465 3.77133 7.34845 4.11043 6.98937 4.34042L6.65249 4.53479C6.23374 4.74994 5.75259 4.80994 5.29398 4.70418L4.07375 4.36048C3.35541 4.15664 2.99625 4.05472 2.67867 4.18388C2.36109 4.31305 2.17445 4.63696 1.80115 5.28479L1.30757 6.14139C0.957656 6.74864 0.782703 7.05227 0.816657 7.37549C0.850614 7.69871 1.08483 7.95918 1.55326 8.48012L2.5843 9.63282C2.8363 9.95185 3.01521 10.5078 3.01521 11.0077C3.01521 11.5078 2.83636 12.0636 2.58433 12.3827L1.55326 13.5354C1.08483 14.0564 0.850616 14.3168 0.816659 14.6401C0.782703 14.9633 0.957662 15.2669 1.30757 15.8741L1.80114 16.7307C2.17443 17.3785 2.36109 17.7025 2.67867 17.8316C2.99625 17.9608 3.35542 17.8589 4.07377 17.655L5.29394 17.3113C5.75263 17.2055 6.23387 17.2656 6.65267 17.4808L6.9895 17.6752C7.34851 17.9052 7.62464 18.2442 7.7775 18.6428L8.11149 19.6403C8.33106 20.3003 8.44085 20.6303 8.70223 20.8191C8.9636 21.0078 9.31078 21.0078 10.0051 21.0078H11.1199C11.8143 21.0078 12.1615 21.0078 12.4228 20.8191C12.6842 20.6303 12.794 20.3003 13.0136 19.6403L13.3476 18.6428C13.5004 18.2442 13.7765 17.9052 14.1356 17.6752L14.4724 17.4808C14.8912 17.2656 15.3724 17.2055 15.8311 17.3113L17.0513 17.655C17.7696 17.8589 18.1288 17.9608 18.4464 17.8316C18.764 17.7025 18.9506 17.3785 19.3239 16.7307L19.8175 15.8741C20.1674 15.2669 20.3423 14.9633 20.3084 14.6401C20.2744 14.3168 20.0402 14.0564 19.5718 13.5354L18.5407 12.3827C18.2887 12.0636 18.1098 11.5078 18.1098 11.0077C18.1098 10.5078 18.2888 9.95185 18.5407 9.63282L19.5718 8.48012C20.0402 7.95918 20.2744 7.69871 20.3084 7.37549C20.3423 7.05227 20.1674 6.74864 19.8175 6.14139Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.0195 11C14.0195 12.933 12.4525 14.5 10.5195 14.5C8.58653 14.5 7.01953 12.933 7.01953 11C7.01953 9.067 8.58653 7.5 10.5195 7.5C12.4525 7.5 14.0195 9.067 14.0195 11Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                />
              </svg>
              Manage Notification Settings
            </a>
          </div>

          <div className="notification-content">
            <div className="notificationtitle">
              <h6>All Notifications</h6>
            </div>

            {/* Notification Item */}
            {[
              {
                icon: speakersvg,
                msg: (
                  <>
                    <b>New Church Announcement:</b> This Sunday's service starts
                    at 8:00 AM instead of 9:00 AM.
                  </>
                ),
                time: "2 hours ago - Today",
                button: null,
              },
              {
                icon: eventsvg,
                msg: (
                  <>
                    <b>Event Reminder:</b> Couples Fellowship holds this Friday
                    at 6 PM.
                  </>
                ),
                time: "1 day(s) ago - 07/04/25",
                button: "Go to Event",
              },
              {
                icon: donationsvg,
                msg: (
                  <>
                    <b>Donation Thank You:</b> Thank you for your generous
                    giving!
                  </>
                ),
                time: "2 day(s) ago - 06/04/25",
                button: "See Details",
              },
              {
                icon: buildsvg,
                msg: (
                  <>
                    <b>Build fellowship:</b> Reach out to other members in your
                    group, prayer circle, or ministry today.
                  </>
                ),
                time: "25 minute(s) ago - Today",
                button: "Search Members",
              },
            ].map((n, i) => (
              <div key={i} className="mt-4">
                <div className="notification-item">
                  <div className="notification-info">
                    <img src={n.icon} alt="" width="40" />
                    <div className="notification-text">
                      <p className="notification-msg">{n.msg}</p>
                      <small>{n.time}</small>
                    </div>
                  </div>

                  <div className="notification-actions">
                    {n.button && (
                      <button className="primary-btn">{n.button}</button>
                    )}
                    <img
                      src={dots}
                      alt="menu"
                      className="menu-btn"
                      onClick={() => toggleMenu(i)}
                    />

                    {openMenu === i && (
                      <div className="dropdown-menu">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M1.5 11C1.5 6.52166 1.5 4.28249 2.89124 2.89124C4.28249 1.5 6.52166 1.5 11 1.5C15.4783 1.5 17.7175 1.5 19.1088 2.89124C20.5 4.28249 20.5 6.52166 20.5 11C20.5 15.4783 20.5 17.7175 19.1088 19.1088C17.7175 20.5 15.4783 20.5 11 20.5C6.52166 20.5 4.28249 20.5 2.89124 19.1088C1.5 17.7175 1.5 15.4783 1.5 11Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M7 12.75C7 12.75 8.6 13.6625 9.4 15C9.4 15 11.8 9.75 15 8"
                              stroke="#141B34"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Mark as Read
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 20 22"
                            fill="none"
                          >
                            <path
                              d="M17.5 4.5L16.8803 14.5251C16.7219 17.0864 16.6428 18.3671 16.0008 19.2879C15.6833 19.7431 15.2747 20.1273 14.8007 20.416C13.8421 21 12.559 21 9.99274 21C7.42312 21 6.1383 21 5.17905 20.4149C4.7048 20.1257 4.296 19.7408 3.97868 19.2848C3.33688 18.3626 3.25945 17.0801 3.10461 14.5152L2.5 4.5"
                              stroke="#FF0000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                            <path
                              d="M1 4.5H19M14.0557 4.5L13.3731 3.09173C12.9196 2.15626 12.6928 1.68852 12.3017 1.39681C12.215 1.3321 12.1231 1.27454 12.027 1.2247C11.5939 1 11.0741 1 10.0345 1C8.96883 1 8.43598 1 7.99568 1.23412C7.8981 1.28601 7.80498 1.3459 7.71729 1.41317C7.32164 1.7167 7.10063 2.20155 6.65861 3.17126L6.05292 4.5"
                              stroke="#FF0000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                            <path
                              d="M7.5 15.5L7.5 9.5"
                              stroke="#FF0000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                            <path
                              d="M12.5 15.5L12.5 9.5"
                              stroke="#FF0000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                          Delete Notification
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
