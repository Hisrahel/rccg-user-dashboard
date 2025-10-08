import React from "react";
import alertsvg from "../assets/image/alertsvg.svg";

function NotificationAlert({ message, type = "success", onClose }) {

  return (
    <div className={`notification-alert ${type}`} role="alert">
      <div className="svgalert">
        <img src={alertsvg} alt="" />
        <span className="message">{message}</span>
      </div>
      <button onClick={onClose} className="close-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M15 1.5L1 15.5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 1.5L15 15.5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default NotificationAlert;
