import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
function Notification() {

  return (
    <section className="dashboard">
      <SideBar isOpen={sidebarOpen} />
      <div className="body-content">
        <TopBar onToggleSidebar={toggleSidebar} />
        <div className="bottom-content">
        </div>
      </div>
    </section>
  );
}

export default Notification;
