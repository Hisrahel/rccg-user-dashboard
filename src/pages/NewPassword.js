import "../css/style.css";
import logo from "../assets/image/rccglogo.webp";

export default function NewPassword() {

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
              <h5>Enter your new password</h5>
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
              />
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
              />
              <button className="mt-5">
                <a href="/">Reset Password</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
