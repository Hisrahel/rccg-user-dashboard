import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import newbeg from "../assets/image/new-beg.webp";

function EventDetails() {
  return (
    <section className="dashboard">
      <SideBar />
      <div className="body-content">
        <TopBar />
        <div className="bottom-content">
          <div className="row">
            <div className="col-md-8">
              <div className="eventdetails">
                <p>Events</p>
                <h6>Worship Night: Sound of Heaven</h6>
                <img src={newbeg} alt="" width="40%" />
                <p>
                  Experience Heaven on Earth <br />
                  Join us for a powerful night of worship, praise, and the
                  tangible presence of God. “Sound of Heaven” is more than an
                  event — it's an atmosphere of surrender, encounter, and
                  spiritual breakthrough.
                </p>{" "}
                <p>
                  Come expectant. Come ready to lift your voice. Come and be
                  refreshed.
                </p>
                <p>
                  <b>Date:</b> Friday, July 26, 2025 <br />
                  <b>Time:</b> 6:30 PM - 9:00 PM <br />
                  <b>Venue:</b> Main Auditorium, RCCG New Beginners Chapel{" "}
                  <br />
                  <b>Hosted by:</b> Worship Ministry
                </p>
                <span>Highlights of the Night:</span>
                <ul>
                  <li>Live worship led by our anointed music team</li>
                  <li>Spontaneous songs and prophetic sound</li>
                  <li>Prayer and moments of reflection</li>
                  <li>A call to deeper intimacy with God</li>
                </ul>
                <p>
                  Who Should Attend?
                  <br /> Everyone! Whether you're a long-time believer or new to
                  the faith, this night is open to all who hunger for God's
                  presence.
                </p>
                <span>Need to Know:</span>{" "}
                <ul>
                  <li>Doors open by 6:00 PM</li>
                  <li>Free entry (registration recommended)</li>
                  <li>Childcare is available for ages 2-8</li>
                  <li> Come early to get the best seats!</li>
                </ul>
                <div className="rsvp">
                  <a href="">RSVP</a>
                  <span>10+ MEMBERS ARE ATTENDING</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <p className="fs-5 pt-1">
                <b>Other Upcoming Events</b>
              </p>
              <div className="upcoming-card">
                <img src={newbeg} alt="" width="100%" />
                <h6>Worship Night: Sound of Heaven</h6>
                <p className="text-white">
                  An unforgettable night of praise, worship, and spontaneous
                  songs.
                </p>
                <hr />
                <div className="datediv">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M17 1V3M5 1V3"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.9955 12H11.0045M10.9955 16H11.0045M14.991 12H15M7 12H7.00897M7 16H7.00897"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.5 7H19.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.5 11.2432C1.5 6.88594 1.5 4.70728 2.75212 3.35364C4.00424 2 6.01949 2 10.05 2H11.95C15.9805 2 17.9958 2 19.2479 3.35364C20.5 4.70728 20.5 6.88594 20.5 11.2432V11.7568C20.5 16.1141 20.5 18.2927 19.2479 19.6464C17.9958 21 15.9805 21 11.95 21H10.05C6.01949 21 4.00424 21 2.75212 19.6464C1.5 18.2927 1.5 16.1141 1.5 11.7568V11.2432Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 7H20"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="text-white">25th Aug, 2025</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 20 22"
                      fill="none"
                    >
                      <path
                        d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        d="M10 1C14.8706 1 19 5.03298 19 9.92577C19 14.8965 14.8033 18.3847 10.927 20.7567C10.6445 20.9162 10.325 21 10 21C9.67495 21 9.35549 20.9162 9.073 20.7567C5.2039 18.3616 1 14.9137 1 9.92577C1 5.03298 5.12944 1 10 1Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                    <span className="text-white">Church Auditorium</span>
                  </div>
                </div>
                <div className="white-buttons">
                  <a href="/eventdetails">See Details</a>
                  <a href="">RSVP</a>
                </div>
              </div>
              <div className="upcoming-card mt-3">
                <img src={newbeg} alt="" width="100%" />
                <h6>Worship Night: Sound of Heaven</h6>
                <p className="text-white">
                  An unforgettable night of praise, worship, and spontaneous
                  songs.
                </p>
                <hr />
                <div className="datediv">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M17 1V3M5 1V3"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.9955 12H11.0045M10.9955 16H11.0045M14.991 12H15M7 12H7.00897M7 16H7.00897"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.5 7H19.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.5 11.2432C1.5 6.88594 1.5 4.70728 2.75212 3.35364C4.00424 2 6.01949 2 10.05 2H11.95C15.9805 2 17.9958 2 19.2479 3.35364C20.5 4.70728 20.5 6.88594 20.5 11.2432V11.7568C20.5 16.1141 20.5 18.2927 19.2479 19.6464C17.9958 21 15.9805 21 11.95 21H10.05C6.01949 21 4.00424 21 2.75212 19.6464C1.5 18.2927 1.5 16.1141 1.5 11.7568V11.2432Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 7H20"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="text-white">25th Aug, 2025</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 20 22"
                      fill="none"
                    >
                      <path
                        d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        d="M10 1C14.8706 1 19 5.03298 19 9.92577C19 14.8965 14.8033 18.3847 10.927 20.7567C10.6445 20.9162 10.325 21 10 21C9.67495 21 9.35549 20.9162 9.073 20.7567C5.2039 18.3616 1 14.9137 1 9.92577C1 5.03298 5.12944 1 10 1Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                    <span className="text-white">Church Auditorium</span>
                  </div>
                </div>
                <div className="white-buttons">
                  <a href="/eventdetails">See Details</a>
                  <a href="">RSVP</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
