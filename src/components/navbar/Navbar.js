import "./navbar.css";
import logo from "../../assets/Skyz-CRM-Avada-Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="content">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="links">
          <span className="link">Home</span>
          <span className="link">About</span>
          <span className="link">Login</span>
          <Link className="link" to="/בלוג">
            <span>Blog</span>
          </Link>
          <span className="link">Contact</span>
          <span className="link darkmode-toggle">moon</span>
          <span className="link">Lang</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
