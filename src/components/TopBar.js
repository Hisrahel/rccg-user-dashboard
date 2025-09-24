import { useState } from "react";
import search from "../assets/image/search.svg";
import man from "../assets/image/man.svg";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="body-top">
      <div className="search-wrapper">
        <input
          type="text"
          className="form-control"
          placeholder="Search anything..."
        />
        <img src={search} alt="search" className="search" />
      </div>

      <div className="userprofile">
        <div className="bell">
          <a href="/notification">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M2.52992 14.894C2.31727 16.2471 3.268 17.1862 4.43205 17.6542C8.89481 19.4486 15.1052 19.4486 19.5679 17.6542C20.732 17.1862 21.6827 16.2471 21.4701 14.894C21.3394 14.0625 20.6932 13.3701 20.2144 12.694C19.5873 11.7975 19.525 10.8197 19.5249 9.77941C19.5249 5.7591 16.1559 2.5 12 2.5C7.84413 2.5 4.47513 5.7591 4.47513 9.77941C4.47503 10.8197 4.41272 11.7975 3.78561 12.694C3.30684 13.3701 2.66061 14.0625 2.52992 14.894Z"
                stroke="#3B3B3B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 21.5C9.79613 22.1219 10.8475 22.5 12 22.5C13.1525 22.5 14.2039 22.1219 15 21.5"
                stroke="#3B3B3B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <img src={man} alt="profile" className="avatar" />
        <span>John Smith</span>

        <div className="svgdropdown" onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M18 9.5C18 9.5 13.5811 15.5 12 15.5C10.4188 15.5 6 9.5 6 9.5"
              stroke="#252525"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {open && (
          <div className="dropdown-menu">
            <a href="/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 20 22"
                fill="none"
              >
                <path
                  d="M4.57757 14.4816C3.1628 15.324 -0.546635 17.0441 1.71266 19.1966C2.81631 20.248 4.04549 21 5.59087 21H14.4091C15.9545 21 17.1837 20.248 18.2873 19.1966C20.5466 17.0441 16.8372 15.324 15.4224 14.4816C12.1048 12.5061 7.89519 12.5061 4.57757 14.4816Z"
                  stroke="#0045E8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 5.5C14.5 7.98528 12.4853 10 10 10C7.51472 10 5.5 7.98528 5.5 5.5C5.5 3.01472 7.51472 1 10 1C12.4853 1 14.5 3.01472 14.5 5.5Z"
                  stroke="#0045E8"
                  stroke-width="1.5"
                />
              </svg>{" "}
              <span className="profile">Profile</span>
            </a>
            <a href="http://rccgc.netlify.app/" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM19.2 19.2L18.6697 19.7303L20.4697 21.5303L21 21L21.5303 20.4697L19.7303 18.6697L19.2 19.2ZM20.1 16.05H20.85C20.85 13.399 18.701 11.25 16.05 11.25V12V12.75C17.8725 12.75 19.35 14.2275 19.35 16.05H20.1ZM16.05 12V11.25C13.399 11.25 11.25 13.399 11.25 16.05H12H12.75C12.75 14.2275 14.2275 12.75 16.05 12.75V12ZM12 16.05H11.25C11.25 18.701 13.399 20.85 16.05 20.85V20.1V19.35C14.2275 19.35 12.75 17.8725 12.75 16.05H12ZM16.05 20.1V20.85C18.701 20.85 20.85 18.701 20.85 16.05H20.1H19.35C19.35 17.8725 17.8725 19.35 16.05 19.35V20.1Z"
                  fill="#141B34"
                />
                <path
                  d="M21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M19 4.69899C18.0653 4.76636 16.8681 5.12824 16.0379 6.20277C14.5385 8.14361 13.039 8.30556 12.0394 7.65861C10.5399 6.6882 11.8 5.11636 10.0401 4.26215C8.89313 3.70542 8.73321 2.19045 9.37158 1"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 10C1.7625 10.6621 2.83046 11.2682 4.08874 11.2682C6.68843 11.2682 7.20837 11.7649 7.20837 13.7518C7.20837 15.7387 7.20837 15.7387 7.72831 17.2288C8.06651 18.1981 8.18472 19.1674 7.5106 20"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              <span>Go to church website</span>
            </a>
            <a href="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13 15.625C12.9264 17.4769 11.3831 19.0494 9.31564 18.9988C8.83465 18.987 8.24013 18.8194 7.05112 18.484C4.18961 17.6768 1.70555 16.3203 1.10956 13.2815C1 12.723 1 12.0944 1 10.8373L1 9.16274C1 7.90561 1 7.27705 1.10956 6.71846C1.70555 3.67965 4.18961 2.32316 7.05112 1.51603C8.24014 1.18064 8.83465 1.01295 9.31564 1.00119C11.3831 0.95061 12.9264 2.52307 13 4.37501"
                  stroke="#970000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M19 10H8M19 10C19 9.29977 17.0057 7.99153 16.5 7.5M19 10C19 10.7002 17.0057 12.0085 16.5 12.5"
                  stroke="#970000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="logout">Logout</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
