import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import newbeg from "../assets/image/new-beg.webp";
import add from "../assets/image/add.svg";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: 1, title: "Sunday Service", date: "2025-09-03", color: "green" },
    { id: 2, title: "Midweek Service", date: "2025-09-06", color: "blue" },
    { id: 3, title: "Prayer Meeting", date: "2025-09-10", color: "yellow" },
    { id: 4, title: "Choir Rehearsal", date: "2025-09-14", color: "red" },
    { id: 5, title: "Holy Communion", date: "2025-09-20", color: "purple" },
    {
      id: 6,
      title: "Worship Night: Sound of Heaven",
      date: "2025-09-24",
      color: "black",
    },
  ];
  return (
    <section className="dashboard">
      <SideBar />
      <div className="body-content">
        <TopBar />
        <div className="bottom-content">
          <div className="row">
            {/* Calendar Left */}
            <div className="col-md-8">
              <div className="calendar">
                {/* <h4>Church Events Calendar</h4>
                <hr /> */}
                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  events={events}
                  eventClick={(info) => {
                    setSelectedEvent(info.event);
                  }}
                  height="100%"
                />
              </div>
            </div>

            {/* Sidebar Right */}
            <div className="col-md-4 col">
              {/* Event Details */}
              <div className="calendar-event">
                {selectedEvent ? (
                  <>
                    <img src={newbeg} alt="" width="100%" />
                    <h6 className="pt-2">{selectedEvent.title}</h6>
                    <p>
                      <small>
                        {/* <b>Date:</b>{" "}
                        {new Date(selectedEvent.start).toLocaleDateString()} */}
                        {/* An unforgettable night of praise, worship, and spontaneous songs. */}
                      </small>
                    </p>
                    <button className="btn btn-primary">Join Event</button>
                  </>
                ) : (
                  <div className="emptyevent">
                    <img src={add} alt="add event" />
                    <h5>
                      Click on an event on the calendar to view the available
                      events
                    </h5>
                  </div>
                )}
              </div>

              {/* Fasting Card */}
              <div className="fasting">
                <div className="upcoming">
                  <h5>
                    Church Fasting <br /> Periods
                  </h5>
                  <a href="/">
                    See More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                    >
                      <path
                        d="M9.75 1.75L1.5 10"
                        stroke="#0045E8"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5.25 1H9.75C10.1036 1 10.2803 1 10.3902 1.10983C10.5 1.21967 10.5 1.39645 10.5 1.75V6.25"
                        stroke="#0045E8"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <p>
                  <small>
                    Join us in fasting and prayer as we humble ourselves before
                    God
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="upcoming-events">
            <div className="upcoming">
              <h5>Upcoming Events</h5>
              <a href="">
                See All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M9.75 1.75L1.5 10"
                    stroke="#0045E8"
                    stroke-width="1.125"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5.25 1H9.75C10.1036 1 10.2803 1 10.3902 1.10983C10.5 1.21967 10.5 1.39645 10.5 1.75V6.25"
                    stroke="#0045E8"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="row">
              <div className="col-md-4">
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
              </div>
              <div className="col-md-4">
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
                        width="20"
                        height="20"
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
                        width="18"
                        height="20"
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
              <div className="col-md-4">
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
                        width="20"
                        height="20"
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
                        width="18"
                        height="20"
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
      </div>
    </section>
  );
}
