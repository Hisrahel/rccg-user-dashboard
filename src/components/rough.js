import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
function Notification() {
  return (
    <section className="dashboard">
      <SideBar />
      <div className="body-content">
        <TopBar />
        <div className="bottom-content">
        </div>
      </div>
    </section>
  );
}

export default Notification;
