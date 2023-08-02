import "../assets/scss/_navigation.scss";
import logo from "../assets/imgs/Skyz-logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Login",
    path: "https://crm-erp.co.il/planc2/logon/?lang=102",
  },
  // {
  //   title: "Blog",
  //   path: "/blogs",
  // },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    // click event listener when the component mounts
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuActive(false); // Close the navbar when clicked outside
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="navbar" ref={navbarRef}>
      <Link to="/">
        <img src={logo} alt="skyz-logo" className="logo" />
      </Link>
      <div className={`links ${menuActive && "active"}`}>
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path} className="link">
            {link.title}
          </Link>
        ))}
        {/* <span className="material-symbols-outlined darkmode-toggle">
          dark_mode
        </span> */}
        {/* <div className="lang">
          <span className="link">
            <b>He</b>
          </span>
          <span className="link">En</span>
        </div> */}
      </div>
      <span
        className="material-symbols-outlined menu-icon"
        onClick={() => setMenuActive(!menuActive)}
      >
        menu
      </span>
    </header>
  );
};

export default Navbar;
