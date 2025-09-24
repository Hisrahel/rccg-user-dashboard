import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AuthLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="flex-grow-1">{children}</div>

      <Footer />
    </div>
  );
}
