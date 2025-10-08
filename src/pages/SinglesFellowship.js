import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import resourceicon from "../assets/image/resourceicon.svg";
import walking from "../assets/image/walking.webp";
import newbeg from "../assets/image/new-beg.webp";

function SinglesFellowship() {
  const resources = [
    {
      id: 1,
      img: walking,
      title: "Disciplining with Grace: Boundaries that Reflect God's Love",
      text: "Discipline is an essential part of parenting, but for Christian families, it's not just about correcting behaviour.",
      buttons: [
        { label: "Read More", link: "/resourcesarticle" },
        { label: "Share", link: "/singlesfellowship" },
      ],
    },
    {
      id: 2,
      img: walking,
      title: "How to Pray with Your Children Daily",
      text: "Prayer is one of the most powerful tools in a Christian parent's hands. Teaching your child to pray daily creates habits that can last a lifetime and builds trust in God from a young age.",
      buttons: [
        { label: "Watch Video", link: "https://rccgc.netlify.app/allvideos" },
        { label: "Share", link: "/singlesfellowship" },
      ],
    },
    {
      id: 3,
      img: walking,
      title: "Raising Godly Teens in a Digital Age",
      text: "Technology is part of life — and so are the challenges that come with it. As Christian parents, how can we guide our teenagers to be wise, faithful, and Christ-like while navigating smartphones, social media, and digital distractions?",
      buttons: [
        {
          label: "Listen to Podcast",
          link: "https://rccgc.netlify.app/audio&videos.html",
        },
        { label: "Share", link: "/singlesfellowship" },
      ],
    },
  ];

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
            <span>Singles Fellowship and Growth</span>
          </div>
          <div className="resources pb-4">
            <div className="resources-wrapper">
              <div className="resource-title-wrap">
                <img src={resourceicon} alt="" />
                <span>Singles' Fellowship & Growth</span>
              </div>
              <div className="resource-divider-wrapper">
                <div className="divider" />
                <span>
                  Welcome to a thriving community of single believers <br />
                  growing together in faith, purpose, and connection. <br />
                  <br />
                  Being single is not a waiting room — it's a season of <br />
                  strength, discovery, and opportunity. At RCCG New <br />
                  Beginners Chapel, we're committed to helping singles <br />
                  grow spiritually, serve faithfully, and build meaningful{" "}
                  <br />
                  relationships through intentional resources and Christ- <br />
                  centred fellowship.
                </span>
              </div>
            </div>

            <hr className="mt-5" />

            <div className="recentitle">
              <h5>Recent Resources</h5>
              <a href="/allresources">
                <small>View All Resources</small>
              </a>
            </div>

            <div className="row">
              {resources.map((item) => (
                <div className="col-md-4" key={item.id}>
                  <div className="recentcard">
                    <img src={item.img} alt={item.title} width="100%" />
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
                    <div className="recent-buttons">
                      {item.buttons.map((btn, idx) => (
                        <a key={idx} href={btn.link}>
                          {btn.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="upcoming-events pb-4">
            <div className="upcoming">
              <h5 className="pt-2 pb-4">Upcoming Singles Focused Events</h5>
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

export default SinglesFellowship;
