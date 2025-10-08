import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import man from "../assets/image/man.svg";

function SearchProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="dashboard">
      <SideBar isOpen={sidebarOpen} />
      <div className="body-content bg-white">
        <TopBar onToggleSidebar={toggleSidebar} />
        <div className="profile">
          <div className="myprofilebg">
            <p>My Profile</p>
            <img src={man} alt="profile" className="avatarprofile" />
          </div>
          <div className="myprofile-content">
            <div className="name-edit">
              <div>
                <h6>John Smith</h6>
                <span>
                  <small>Civil Engineer</small>
                </span>
                <p>
                  <small>Dorset, United Kingdom</small>
                </p>
              </div>
            </div>
            <hr className="hr" />
            <div>
              <div className="name-edit">
                <h6>Other Information</h6>
              </div>
              <div className="row profileditrow">
                <div className="col-md-4">
                  <div>
                    <h6 className="py-2">Bio</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <h6 className="py-2">Short Testimony</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="hr" />
            <div>
              <div className="name-edit">
                <h6>My Social Media Links</h6>
              </div>
              <div className="social-row mt-4">
                <a href="/profile" className="whatsapp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 23 22"
                    fill="none"
                  >
                    <path
                      d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 12.3789 1.77907 13.6926 2.28382 14.8877C2.56278 15.5481 2.70226 15.8784 2.71953 16.128C2.7368 16.3776 2.66334 16.6521 2.51642 17.2012L1.5 21L5.29877 19.9836C5.84788 19.8367 6.12244 19.7632 6.37202 19.7805C6.62161 19.7977 6.95185 19.9372 7.61235 20.2162C8.80745 20.7209 10.1211 21 11.5 21Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.08815 11.3773L8.95909 10.2956C9.32616 9.83974 9.77994 9.41529 9.81546 8.80826C9.82444 8.65494 9.71656 7.96657 9.5008 6.58986C9.41601 6.04881 8.91086 6 8.47332 6C7.90314 6 7.61805 6 7.33495 6.12931C6.97714 6.29275 6.60979 6.75231 6.52917 7.13733C6.46539 7.44196 6.51279 7.65187 6.60759 8.07169C7.01023 9.85482 7.95481 11.6158 9.41948 13.0805C10.8842 14.5452 12.6452 15.4898 14.4283 15.8924C14.8481 15.9872 15.058 16.0346 15.3627 15.9708C15.7477 15.8902 16.2072 15.5229 16.3707 15.165C16.5 14.8819 16.5 14.5969 16.5 14.0267C16.5 13.5891 16.4512 13.084 15.9101 12.9992C14.5334 12.7834 13.8451 12.6756 13.6917 12.6845C13.0847 12.7201 12.6603 13.1738 12.2044 13.5409L11.1227 14.4118"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
                  Connect on WhatsApp
                </a>
                <a href="/profile" className="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M1.5 11C1.5 6.52166 1.5 4.28249 2.89124 2.89124C4.28249 1.5 6.52166 1.5 11 1.5C15.4783 1.5 17.7175 1.5 19.1088 2.89124C20.5 4.28249 20.5 6.52166 20.5 11C20.5 15.4783 20.5 17.7175 19.1088 19.1088C17.7175 20.5 15.4783 20.5 11 20.5C6.52166 20.5 4.28249 20.5 2.89124 19.1088C1.5 17.7175 1.5 15.4783 1.5 11Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.5 11C15.5 13.4853 13.4853 15.5 11 15.5C8.51472 15.5 6.5 13.4853 6.5 11C6.5 8.51472 8.51472 6.5 11 6.5C13.4853 6.5 15.5 8.51472 15.5 11Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                    <path
                      d="M16.5078 5.5L16.4988 5.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Connect on Instagram
                </a>
                <a href="/profile" className="facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 22"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.68182 9.33333C1.70406 9.33333 1.5 9.52519 1.5 10.4444L1.5 12.1111C1.5 13.0304 1.70406 13.2222 2.68182 13.2222H5.04545L5.04545 19.8889C5.04545 20.8081 5.24951 21 6.22727 21H8.59091C9.56867 21 9.77273 20.8081 9.77273 19.8889L9.77273 13.2222L12.4267 13.2222C13.1683 13.2222 13.3594 13.0867 13.5631 12.4164L14.0696 10.7497C14.4185 9.60136 14.2035 9.33333 12.9332 9.33333L9.77273 9.33333V6.55556C9.77273 5.94191 10.3018 5.44444 10.9545 5.44444L14.3182 5.44444C15.2959 5.44444 15.5 5.25259 15.5 4.33333V2.11111C15.5 1.19185 15.2959 1 14.3182 1L10.9545 1C7.69104 1 5.04545 3.48731 5.04545 6.55556V9.33333H2.68182Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.22727 21C5.24951 21 5.04545 20.8081 5.04545 19.8889L5.04545 13.2222H2.68182C1.70406 13.2222 1.5 13.0304 1.5 12.1111L1.5 10.4444C1.5 9.52519 1.70406 9.33333 2.68182 9.33333H5.04545V6.55556C5.04545 3.48731 7.69104 1 10.9545 1L14.3182 1C15.2552 1 15.4817 1.1762 15.4989 2"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Connect on Facebook
                </a>
              </div>
              <div className="social-row mt-4">
                <a href="/profile" className="twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M1.5 19L9.0484 11.4516M9.0484 11.4516L1.5 1H6.5L11.9516 8.5484M9.0484 11.4516L14.5 19H19.5L11.9516 8.5484M19.5 1L11.9516 8.5484"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Connect on X (Twitter)
                </a>
                <a href="/profile" className="linkedin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M3.5 8.5H3C2.05719 8.5 1.58579 8.5 1.29289 8.79289C1 9.08579 1 9.55719 1 10.5L1 19C1 19.9428 1 20.4142 1.29289 20.7071C1.58579 21 2.05719 21 3 21H3.5C4.44281 21 4.91421 21 5.20711 20.7071C5.5 20.4142 5.5 19.9428 5.5 19L5.5 10.5C5.5 9.55719 5.5 9.08579 5.20711 8.79289C4.91421 8.5 4.44281 8.5 3.5 8.5Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                    <path
                      d="M5.5 3.25C5.5 4.49264 4.49264 5.5 3.25 5.5C2.00736 5.5 1 4.49264 1 3.25C1 2.00736 2.00736 1 3.25 1C4.49264 1 5.5 2.00736 5.5 3.25Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.326 8.5H10.5C9.55719 8.5 9.08579 8.5 8.79289 8.79289C8.5 9.08579 8.5 9.55719 8.5 10.5L8.5 19C8.5 19.9428 8.5 20.4142 8.79289 20.7071C9.08579 21 9.55719 21 10.5 21H11C11.9428 21 12.4142 21 12.7071 20.7071C13 20.4142 13 19.9428 13 19L13.0001 15.5001C13.0001 13.8433 13.5281 12.5001 15.0879 12.5001C15.8677 12.5001 16.5 13.1717 16.5 14.0001L16.5 18.5001C16.5 19.4429 16.5 19.9143 16.7929 20.2072C17.0857 20.5001 17.5572 20.5001 18.5 20.5001H18.9987C19.9413 20.5001 20.4126 20.5001 20.7055 20.2073C20.9984 19.9145 20.9985 19.4432 20.9987 18.5006L21.0001 13.0002C21.0001 10.515 18.6364 8.50024 16.2968 8.50024C14.9649 8.50024 13.7767 9.15309 13.0001 10.174C13 9.54394 13 9.22893 12.8632 8.995C12.7765 8.84686 12.6531 8.72353 12.505 8.63687C12.2711 8.5 11.9561 8.5 11.326 8.5Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Connect on Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchProfile;
