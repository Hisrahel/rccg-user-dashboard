import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import resourceicon from "../assets/image/resourceicon.svg";
import hand from "../assets/image/hand.webp";
import bible from "../assets/image/bible.webp";
import sky from "../assets/image/sky.webp";

const articlesByTab = {
  "all-article": [
    {
      id: 1,
      title: "How to Build a Daily Devotion Habit That Lasts",
      img: hand,
      text: "Many Christians desire a deeper relationship with God but struggle to maintain consistency in their daily devotio...",
    },
    {
      id: 2,
      title: "Hearing God in a Noisy World",
      img: sky,
      text: "In a world filled with constant notifications, opinions, and distractions, hearing God's voice can feel nearly impossible. Many belie...",
    },
    {
      id: 3,
      title: "What Does It Really Mean to Trust God?",
      img: bible,
      text: "We often hear the phrase 'Trust God', especially during hard times. But when life gets uncertain, trust becomes more than a...",
    },
    {
      id: 4,
      title: "How to Build a Daily Devotion Habit That Lasts",
      img: hand,
      text: "Many Christians desire a deeper relationship with God but struggle to maintain consistency in their daily devotio...",
    },
    {
      id: 5,
      title: "Hearing God in a Noisy World",
      img: sky,
      text: "In a world filled with constant notifications, opinions, and distractions, hearing God's voice can feel nearly impossible. Many belie...",
    },
    {
      id: 6,
      title: "What Does It Really Mean to Trust God?",
      img: bible,
      text: "We often hear the phrase 'Trust God', especially during hard times. But when life gets uncertain, trust becomes more than a...",
    },
  ],
  "family-article": [
    {
      id: 11,
      title: "What Does It Really Mean to Trust God?",
      img: bible,
      text: "We often hear the phrase 'Trust God', especially during hard times. But when life gets uncertain, trust becomes more than a...",
    },
    {
      id: 12,
      title: "How to Build a Daily Devotion Habit That Lasts",
      img: hand,
      text: "Many Christians desire a deeper relationship with God but struggle to maintain consistency in their daily devotio...",
    },
    {
      id: 13,
      title: "Hearing God in a Noisy World",
      img: sky,
      text: "In a world filled with constant notifications, opinions, and distractions, hearing God's voice can feel nearly impossible. Many belie...",
    },
  ],
  "singles-article": [
    {
      id: 21,
      title: "Hearing God in a Noisy World",
      img: sky,
      text: "In a world filled with constant notifications, opinions, and distractions, hearing God's voice can feel nearly impossible. Many belie...",
    },
    {
      id: 22,
      title: "What Does It Really Mean to Trust God?",
      img: bible,
      text: "We often hear the phrase 'Trust God', especially during hard times. But when life gets uncertain, trust becomes more than a...",
    },
    {
      id: 23,
      title: "How to Build a Daily Devotion Habit That Lasts",
      img: hand,
      text: "Many Christians desire a deeper relationship with God but struggle to maintain consistency in their daily devotio...",
    },
  ],
  "children-article": [
    {
      id: 31,
      title: "How to Build a Daily Devotion Habit That Lasts",
      img: hand,
      text: "Many Christians desire a deeper relationship with God but struggle to maintain consistency in their daily devotio...",
    },
    {
      id: 32,
      title: "Hearing God in a Noisy World",
      img: sky,
      text: "In a world filled with constant notifications, opinions, and distractions, hearing God's voice can feel nearly impossible. Many belie...",
    },
    {
      id: 33,
      title: "What Does It Really Mean to Trust God?",
      img: bible,
      text: "We often hear the phrase 'Trust God', especially during hard times. But when life gets uncertain, trust becomes more than a...",
    },
  ],
  "others-article": [],
};

export default function Resources() {
  const [activeTab, setActiveTab] = useState("all-article");

  const tabs = [
    { id: "all-article", label: "All Articles" },
    { id: "family-article", label: "Family & Devotion Articles" },
    { id: "singles-article", label: "Singles Articles" },
    { id: "children-article", label: "Children Articles" },
    { id: "others-article", label: "Others" },
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
            <span>Resources</span>
          </div>
          <div className="resources">
            <div className="resources-wrap">
              <div className="resource-title-wrap">
                <img src={resourceicon} alt="" />
                <span>All Article</span>
              </div>
              <div className="resource-divider-wrap">
                <div className="divider" />
                <span>
                  Discover how to walk by faith, not by sight, in your everyday{" "}
                  <br />
                  challenges. These articles encourage trust in God's <br />
                  promises no matter the season.
                </span>
              </div>
            </div>
            <div className="article-section">
              {/* TAB BUTTONS */}
              <div className="article-row">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`article-tab ${
                      activeTab === t.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(t.id)}
                    aria-pressed={activeTab === t.id}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT BLOCKS */}
              <div className="container article-section">
                {Object.keys(articlesByTab).map((tabKey) => (
                  <div
                    key={tabKey}
                    className={`row article-content ${tabKey} ${
                      activeTab === tabKey ? "active" : ""
                    }`}
                  >
                    {(articlesByTab[tabKey] || []).map((a) => (
                      <div className="col-md-4 colmd" key={a.id}>
                        <div className="resource-card">
                          <img
                            src={a.img}
                            alt={a.title}
                            className="card-img-top"
                          />
                          <div className="cardbody">
                            <h5 className="card-title">{a.title}</h5>
                            <p className="card-text">{a.text}</p>
                            <a
                              href="resourcesarticle"
                              className="btn btn-read-more"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* If a tab has no articles, show a message */}
                    {(!articlesByTab[tabKey] ||
                      articlesByTab[tabKey].length === 0) && (
                      <div className="col-12">
                        <p>No articles in this category yet.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
