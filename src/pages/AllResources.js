import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import walking from "../assets/image/walking.webp";

function AllResources() {
  const resources = [
    {
      id: 1,
      img: walking,
      title: "Disciplining with Grace: Boundaries that Reflect God's Love",
      text: "Discipline is an essential part of parenting, but for Christian families, it's not just about correcting behaviour.",
      buttons: [
        { label: "Read More", link: "/resourcesarticle", type: "primary" },
        { label: "Share", link: "/singlesfellowship", type: "secondary" },
      ],
    },
    {
      id: 2,
      img: walking,
      title: "How to Pray with Your Children Daily",
      text: "Prayer is one of the most powerful tools in a Christian parent's hands. Teaching your child to pray daily creates habits that can last a lifetime and builds trust in God from a young age.",
      buttons: [
        {
          label: "Watch Video",
          link: "https://rccgc.netlify.app/allvideos",
          type: "primary",
        },
        { label: "Share", link: "/singlesfellowship", type: "secondary" },
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
          type: "primary",
        },
        { label: "Share", link: "/singlesfellowship", type: "secondary" },
      ],
    },
    {
      id: 4,
      img: walking,
      title: "Disciplining with Grace: Boundaries that Reflect God's Love",
      text: "Discipline is an essential part of parenting, but for Christian families, it's not just about correcting behaviour.",
      buttons: [
        { label: "Read More", link: "/resourcesarticle", type: "primary" },
        { label: "Share", link: "/singlesfellowship", type: "secondary" },
      ],
    },
    {
      id: 5,
      img: walking,
      title: "How to Pray with Your Children Daily",
      text: "Prayer is one of the most powerful tools in a Christian parent's hands. Teaching your child to pray daily creates habits that can last a lifetime and builds trust in God from a young age.",
      buttons: [
        {
          label: "Watch Video",
          link: "https://rccgc.netlify.app/allvideos",
          type: "primary",
        },
        { label: "Share", link: "/singlesfellowship", type: "secondary" },
      ],
    },
    {
      id: 6,
      img: walking,
      title: "Raising Godly Teens in a Digital Age",
      text: "Technology is part of life — and so are the challenges that come with it. As Christian parents, how can we guide our teenagers to be wise, faithful, and Christ-like while navigating smartphones, social media, and digital distractions?",
      buttons: [
        {
          label: "Listen to Podcast",
          link: "https://rccgc.netlify.app/audio&videos.html",
          type: "primary",
        },
        { label: "Share", link: "/singlesfellowship", type: "secondary" },
      ],
    },
    {
      id: 7,
      img: walking,
      title: "Disciplining with Grace: Boundaries that Reflect God's Love",
      text: "Discipline is an essential part of parenting, but for Christian families, it's not just about correcting behaviour.",
      buttons: [
        { label: "Read More", link: "/resourcesarticle", type: "primary" },
        { label: "Share", link: "/singlesfellowship", type: "secondary" },
      ],
    },
    {
      id: 8,
      img: walking,
      title: "How to Pray with Your Children Daily",
      text: "Prayer is one of the most powerful tools in a Christian parent's hands. Teaching your child to pray daily creates habits that can last a lifetime and builds trust in God from a young age.",
      buttons: [
        {
          label: "Watch Video",
          link: "https://rccgc.netlify.app/allvideos",
          type: "primary",
        },
        { label: "Share", link: "/singlesfellowship", type: "secondary" },
      ],
    },
    {
      id: 9,
      img: walking,
      title: "Raising Godly Teens in a Digital Age",
      text: "Technology is part of life — and so are the challenges that come with it. As Christian parents, how can we guide our teenagers to be wise, faithful, and Christ-like while navigating smartphones, social media, and digital distractions?",
      buttons: [
        {
          label: "Listen to Podcast",
          link: "https://rccgc.netlify.app/audio&videos.html",
          type: "primary",
        },
        { label: "Share", link: "/singlesfellowship", type: "secondary" },
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination logic
  const totalPages = Math.ceil(resources.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentResources = resources.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
          {/* Header Row */}
          <div className="d-flex justify-content-between align-items-center my-4">
            <h5>All Resources</h5>
            <select className="form-select w-auto resource-select">
              <option>Articles</option>
              <option>Videos</option>
              <option>Podcasts</option>
              <option>Others</option>
            </select>
          </div>

          <div className="row">
            {currentResources.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
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

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <small className="text-muted">
              Showing {startIndex + 1} -{" "}
              {Math.min(startIndex + itemsPerPage, resources.length)} of{" "}
              {resources.length}
            </small>
            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllResources;
