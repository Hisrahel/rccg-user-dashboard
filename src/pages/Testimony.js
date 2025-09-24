import React, { useRef } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import man from "../assets/image/man.svg";
import left from "../assets/image/left.svg";
import right from "../assets/image/right.svg";
import note from "../assets/image/note.svg";

function Testimony() {
  // Different testimonies
  const requests = [
    {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="dashboard">
      <SideBar />
      <div className="body-content">
        <TopBar />
        <div className="bottom-content">
          <div className="prayer-title">
            <span>Testimonies & Inspirations</span>
            <a href="/testimonyhistory">
              <u>Your Testimonies</u>
            </a>
          </div>
          <h6 className="py-3">Featured Testimonies</h6>

          <div className="testimony-wrapper">
            {/* Left Arrow */}
            <img
              src={left}
              alt="scroll left"
              className="arrow arrowleft"
              onClick={scrollLeft}
            />

            {/* Scrollable Container */}
            <div className="testimony-row" ref={scrollRef}>
              {requests.map((req, index) => (
                <div className="request-card" key={index}>
                  <img src={man} alt="user" />
                  <p className="pt-3">
                    <small>{req.text}</small>
                  </p>
                  <p className=" text-primary">
                    <small>{req.name}</small>
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <img
              src={right}
              alt="scroll right"
              className="arrow arrowright"
              onClick={scrollRight}
            />
          </div>
          <div className="burdens-card">
            <div className="col-md-5">
              <h5 className="burdens-card-head">Share Your Testimony</h5>
              <p>
                Share your story and encourage someone today. Let the world know
                what God has done for you!
              </p>

              <img src={note} alt="" />
              <h6>Submission Notes</h6>
              <ul>
                <li>All testimonies are reviewed before publishing.</li>
                <li>
                  Featured testimonies may appear on the homepage or newsletter
                  with your permission.
                </li>
                <li>You can choose to remain anonymous if preferred.</li>
                <li>You may choose to remain anonymous.</li>
              </ul>
            </div>
            <div className="col-md-5">
              <div className="submit-card">
                <h5>Share a testimony</h5>
                <div className="sharediv">
                  <input type="checkbox" name="" id="" />
                  <span>Share Anonymously</span>
                </div>
                <label htmlFor="" className="pb-2">
                 Your Testimony
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="9"
                  className="form-control"
                  placeholder="Enter your testimony"
                ></textarea>
                <p className="pt-3">Add to Featured Testimonies?</p>
                <div className="sharediv">
                  <input type="checkbox" name="" id="" />
                  <span>Yes, I'd love for my story to inspire more people.</span>
                </div>
                <div className="sharediv">
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
                <div className="sharebutton">
                  <a href="/testimonyhistory" className="text-white">
                    <small>Share your testimony</small>
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

export default Testimony;
