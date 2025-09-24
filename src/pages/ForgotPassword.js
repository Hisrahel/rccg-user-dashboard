import "../css/style.css";
import logo from "../assets/image/rccglogo.webp";

export default function ForgotPassword() {
  return (
    <section className="login">
      <div className="containerfluid">
        <div className="row loginrow">
          <div className="col-md-6">
            <div className="loginbg">
              <img src={logo} alt="image" />
              <h5 className="py-5">
                Welcome to RCCG New Beginners Chapel, Bournemouth, UK
              </h5>
              <p className="text-white">
                RCCG Bournemouth Membership Portal has been built to create a
                community where the church members can interact with each other
                seamlessly.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <h5>Forgot Password</h5>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
              <a href="/login" className="arrowlink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 18 12"
                  fill="none"
                >
                  <path
                    d="M0.999983 6.00024L17 6.00024"
                    stroke="#040404"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.99996 1C5.99996 1 1.00001 4.68244 1 6.00004C0.999988 7.31763 6 11 6 11"
                    stroke="#040404"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span> Back to Login</span>
              </a>
              <button>
                <a href="/resetPassword">Reset Password</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
