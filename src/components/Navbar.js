import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/mobile.css";
import logo from "../assets/image/rccglogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {


  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-row">
            <div>
              <a href="mailto:info@rccgbournemouth.org" className="text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M2.3335 7L10.3987 11.5698C13.372 13.2545 14.6283 13.2545 17.6017 11.5698L25.6668 7"
                    stroke="black"
                    stroke-width="1.75"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.35189 15.7215C2.42816 19.2981 2.4663 21.0862 3.78595 22.411C5.10559 23.7356 6.94221 23.7817 10.6155 23.874C12.8793 23.9309 15.121 23.9309 17.3849 23.874C21.0581 23.7817 22.8947 23.7356 24.2144 22.411C25.5341 21.0862 25.5722 19.2981 25.6484 15.7215C25.673 14.5715 25.673 13.4284 25.6484 12.2785C25.5722 8.702 25.5341 6.91377 24.2144 5.5891C22.8947 4.26443 21.0581 4.21829 17.3849 4.12599C15.121 4.06911 12.8793 4.06911 10.6155 4.12598C6.94221 4.21827 5.10559 4.26441 3.78594 5.58909C2.46629 6.91376 2.42816 8.70199 2.35188 12.2785C2.32736 13.4284 2.32737 14.5715 2.35189 15.7215Z"
                    stroke="black"
                    stroke-width="1.75"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>info@rccgbournemouth.org</span>
              </a>
            </div>
            <div>
              <a
                href="https://share.google/PBHWk8haAzFsRiboc"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M15.8873 24.9282C15.3814 25.4018 14.7051 25.6667 14.0013 25.6667C13.2974 25.6667 12.6212 25.4018 12.1152 24.9282C7.48186 20.5637 1.27255 15.688 4.30065 8.6096C5.9379 4.78235 9.86806 2.33333 14.0013 2.33333C18.1345 2.33333 22.0647 4.78235 23.702 8.6096C26.7262 15.6792 20.5322 20.5787 15.8873 24.9282Z"
                    stroke="black"
                    stroke-width="1.75"
                  />
                  <path
                    d="M18.0832 12.8333C18.0832 15.0885 16.255 16.9167 13.9998 16.9167C11.7447 16.9167 9.9165 15.0885 9.9165 12.8333C9.9165 10.5782 11.7447 8.75 13.9998 8.75C16.255 8.75 18.0832 10.5782 18.0832 12.8333Z"
                    stroke="black"
                    stroke-width="1.75"
                  />
                </svg>
                <span>
                  Stourvale Centre, 108 Stourvale Road, Bournemouth BH6 5JB.
                </span>
              </a>
            </div>
            <div>
              <a href="http://rccgc.netlify.app/search.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M19.8335 19.8333L24.5002 24.5"
                    stroke="black"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.1667 12.8333C22.1667 7.67867 17.988 3.5 12.8333 3.5C7.67867 3.5 3.5 7.67867 3.5 12.8333C3.5 17.988 7.67867 22.1667 12.8333 22.1667C17.988 22.1667 22.1667 17.988 22.1667 12.8333Z"
                    stroke="black"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="http://rccgc.netlify.app/">
            <img src={logo} alt="RCCG Logo" width="60" height="60" />
            <span>
              The Redeemed Christian <br />
              Church of God, <br />
              New Beginning Chapel.
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active home"
                  aria-current="page"
                  href="http://rccgc.netlify.app/"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://rccgc.netlify.app/aboutus.html"
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://rccgc.netlify.app/resources.html"
                >
                  RESOURCES
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://rccgc.netlify.app/ministry.html"
                >
                  MINISTRIES
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://rccgc.netlify.app/events.html"
                >
                  EVENTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://rccgc.netlify.app/contactus.html"
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <button className="btn btn-login">
              <a href="/login" className="text-white">
                LOGIN
              </a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
