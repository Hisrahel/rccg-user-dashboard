import "../css/style.css";
import "../css/mobile.css";
import logo from "../assets/image/rccglogo.webp";

export default function Login() {
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
              <h5>Login</h5>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
              />
              <a href="/forgotPassword">Forgot Password?</a>
              <button>
                <a href="/">Login</a>
              </button>
              <p>
                Not yet a member of this Membership Portal?{" "}
                <a href="/signup" className="text-primary">
                  Register Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
