import logo from "../assets/image/rccglogo.webp";
import ig from "../assets/image/ig.webp";
import fb from "../assets/image/fb.webp";
import yt from "../assets/image/yt.webp";
import x from "../assets/image/x.webp";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-md-6 col-12">
            <a
              href="http://rccgc.netlify.app/"
              className="footer-logo text-white"
            >
              <img src={logo} alt="RCCG Logo" />
              <span className="text-white">
                The Redeemed Christian <br />
                Church of God, <br />
                New Beginning Chapel.
              </span>
            </a>
            <div className="footer-text">
              <div>
                <h6>Contact</h6>
                <a href="tel:07448583833" className="text-white">
                  <span className="text-white">
                    <small>07448583833</small>
                  </span>
                </a>
                <br />
                <a
                  href="mailto:info@rccgbournemouth.org"
                  className="text-white"
                >
                  <span className="text-white">
                    <small>info@rccgbournemouth.org</small>
                  </span>
                </a>
                <div className="socials">
                  <a href="/">
                    <img src={ig} alt="icon" />
                  </a>
                  <a href="/">
                    <img src={fb} alt="icon" />
                  </a>
                  <a href="/">
                    <img src={yt} alt="icon" />
                  </a>
                  <a href="/">
                    <img src={x} alt="icon" />
                  </a>
                </div>
              </div>
              <div className="location">
                <h6>Location</h6>
                <span>
                  <small>
                    <a
                      href="https://share.google/PBHWk8haAzFsRiboc"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stourvale Centre, 108 <br />
                      Stourvale Road, Bournemouth <br />
                      BH6 5JB.
                    </a>
                  </small>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-5 stay">
            <h5>Stay Connected</h5>
            <p className="pt-2 pb-4 text-white">
              <small>
                Sign up with your email address to receive updates from <br />
                RCCG Bournemouth
              </small>
            </p>
            <div className="subscribe-form">
              <form action="">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-control footer-input"
                  required
                />
                <p class="pt-2 text-white">
                  <small>
                    Please read our
                    <a href="http://rccgc.netlify.app/privacy.html" class="text-white">
                      {" "}
                      <u>Privacy Notice</u>
                    </a>{" "}
                    to learn how we protect your personal data.
                  </small>
                </p>
                <button className="btn btn-subscribe" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="footer-links">
            <a href="http://rccgc.netlify.app/aboutus.html">About Us</a>
            <a href="http://rccgc.netlify.app/resources.html">Resources</a>
            <a href="http://rccgc.netlify.app/ministry.html">Ministries</a>
            <a href="http://rccgc.netlify.app/events.html">Events</a>
            <a href="http://rccgc.netlify.app/contactus.html">Contact</a>
            <a href="http://rccgc.netlify.app/portal.html">
              RCCG New Beginning Chapel E-Portal
            </a>
          </div>
          <div class="footer-bottom">
            <a href="http://rccgc.netlify.app/privacy.html">
              <small>
                <u>Privacy Notice</u>
              </small>
            </a>
            <a href="http://rccgc.netlify.app/cookies.html">
              <small>
                <u>Cookie Notice</u>
              </small>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
