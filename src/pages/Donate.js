import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import donatemockup from "../assets/image/donatemockup.webp";
import greenheart from "../assets/image/handsvg.svg";

function Donate() {
  const [frequency, setFrequency] = useState("One-Time");
  const [amount, setAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);

  const presetAmounts = [10, 20, 30, 100];

  const handleAmountClick = (value) => {
    setSelectedAmount(value);
    setAmount(value);
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
            <span>Online Donations & Giving</span>
            <a href="/donatehistory">
              <small>
                <u>Donation History</u>
              </small>
            </a>
          </div>
          <div className="burdens-card">
            <div className="row burdenrow">
              <div className="col-md-5">
                <h5 className="burdens-card-head">
                  Give with a Cheerful Heart
                </h5>
                <p>
                  Every gift you sow helps advance the mission of the church —
                  supporting worship services, outreach programmes, community
                  care, youth development, missions, and more. Thank you for
                  partnering with us to spread God's love.
                </p>

                <img src={donatemockup} alt="" width="100%" />
                <h6>Why Give?</h6>
                <ul>
                  <li>To honour God with our resources</li>
                  <li>To support the work of ministry</li>
                  <li>To be a blessing to others</li>
                  <li>To invest in Kingdom impact</li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="donationcard">
                  <h6>Select Gift Frequency</h6>
                  <div className="donationtab">
                    <span
                      className={frequency === "One-Time" ? "active" : ""}
                      onClick={() => setFrequency("One-Time")}
                    >
                      One-Time
                    </span>
                    <span
                      className={frequency === "Monthly" ? "active" : ""}
                      onClick={() => setFrequency("Monthly")}
                    >
                      Monthly
                    </span>
                  </div>

                  <h6>Input or select an amount you want to donate</h6>
                  <form action="" className="donationform">
                    <label>Input Amount</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter an amount (£)"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                    />

                    <div className="donationprice">
                      {presetAmounts.map((value) => (
                        <span
                          key={value}
                          className={selectedAmount === value ? "active" : ""}
                          onClick={() => handleAmountClick(value)}
                        >
                          £ {value}
                        </span>
                      ))}
                    </div>

                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                    <label className="pt-4">Email</label>
                    <input
                      type="email"
                      className="form-control emaildown"
                      placeholder="Enter your email"
                    />
                    <p>
                      <small>
                        Please read our{" "}
                        <span
                          onClick={() =>
                            (window.location.href =
                              "http://rccgc.netlify.app/privacy.html")
                          }
                          className="privacy-link"
                        >
                          <small>
                            <u>Privacy Notice</u>
                          </small>
                        </span>{" "}
                        to learn how we protect your personal data.
                      </small>
                    </p>
                    <a href="/donatehistory" className="donatebutton">
                      Donate Now
                    </a>
                  </form>
                </div>
              </div>
              <div className="mb-3 mt-4">
                <hr />
              </div>
              <div className="greenheart">
                <img src={greenheart} alt="" width="70px" />
                <div>
                  <h6>Thank You for Your Generosity</h6>
                  <span>
                    <small>
                      We are grateful for your faithful giving. May God multiply
                      every seed you sow and bless you richly.
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donate;
