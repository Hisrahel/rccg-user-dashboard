import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import sky from "../assets/image/sky.webp";
import bible from "../assets/image/bible.webp";

function ResourcesArticle() {
  return (
    <section className="dashboard">
      <SideBar />
      <div className="body-content">
        <TopBar />
        <div className="bottom-content">
          <div className="row">
            <div className="col-md-8">
              <div className="eventdetails">
                <h5>
                  Disciplining with Grace: Boundaries that <br /> Reflect God's
                  Love
                </h5>
                <img src={sky} alt="" width="40%" />
                <h6 className="pt-3">Introduction</h6>{" "}
                <p>
                  Prayer is one of the most powerful tools in a Christian
                  parent's hands. Teaching your child to pray daily creates
                  habits that can last a lifetime and builds trust in God from a
                  young age.
                </p>
                <br />
                <span>1. Start Simple and Age-Appropriate</span>
                <br />
                <span>
                  Children don't need long or perfect words — just honest
                  hearts.
                </span>
                <ul>
                  <li>
                    Teach basic sentence prayers like "Thank You for my family"
                    or "Please help me be kind."
                  </li>
                  <li>
                    Model prayer by letting them hear you talk to God naturally.
                  </li>
                </ul>
                <br />
                <span>2. Make It a Daily Routine</span>
                <br />
                <span>Consistency builds habit. Choose a specific time:</span>
                <ul>
                  <li>Morning: Before school or breakfast.</li>
                  <li>Evening: Before bedtime or during family devotion.</li>
                  <li> Mealtimes: Encourage even young kids to lead grace.</li>
                </ul>{" "}
                <br />
                <span>3. Teach the ACTS Pattern</span>
                <br />
                <span>
                  {" "}
                  A simple prayer structure helps children remember:{" "}
                </span>
                <ul>
                  <li> Adoration - praising God</li>
                  <li>Confession - saying sorry</li>
                  <li>Thanksgiving - showing gratitude</li>
                  <li>Supplication - asking for help</li>
                </ul>{" "}
                <br />
                <span>4. Pray Over Their Lives Together</span>
                <br />
                <span>
                  Speak blessings over their identity, school, friendships, and
                  future. Let them join in praying for others too.
                </span>
                <ul>
                  <li>Involve siblings or friends during prayer.</li>
                  <li>
                    Use a prayer journal to track answered prayers together.
                  </li>
                </ul>{" "}
                <br />
                <h6>Conclusion</h6>{" "}
                <p>
                  Prayer shouldn't feel like a chore — it should be a joy. When
                  you make prayer a natural part of your family rhythm, you
                  raise children who know God personally, not just know about
                  Him.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <p className="fs-5 pt-1">
                <b>Explore Other Articles</b>
              </p>
              <div class="resource-card">
                <img src={bible} alt="Family Devotion" class="card-img-top" />
                <div class="cardbody">
                  <h5 class="card-title">
                    What Does It Really Mean to Trust God?
                  </h5>
                  <p class="card-text py-4"> 
                    We often hear the phrase "Trust God," especially during hard
                    times. But when life gets uncertain, trust becomes more than
                    a...
                  </p>
                  <a href="resourcesarticle" class="btn btn-read-more">
                    Read More
                  </a>
                </div>
              </div>
              <div class="resource-card mt-4">
                <img src={bible} alt="Family Devotion" class="card-img-top" />
                <div class="cardbody">
                  <h5 class="card-title">
                    What Does It Really Mean to Trust God?
                  </h5>
                  <p class="card-text py-4">
                    We often hear the phrase "Trust God," especially during hard
                    times. But when life gets uncertain, trust becomes more than
                    a...
                  </p>
                  <a href="resourcesarticle" class="btn btn-read-more">
                    Read More
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

export default ResourcesArticle;
