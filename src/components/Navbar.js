import "../assets/scss/_navigation.scss";
import logo from "../assets/imgs/Skyz-logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import i18next from "i18next";

import { useTranslation } from "react-i18next";

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

const lngs = {
  en: { nativeName: "English" },
  he: {
    nativeName: "Hebrew",
  },
};

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

  // Function to close the menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setMenuActive(false);
  };

  const { i18n } = useTranslation();

  return (
    <header className="navbar" ref={navbarRef}>
      <Link to="/">
        <img src={logo} alt="skyz-logo" className="logo" />
      </Link>
      <div className={`links ${menuActive && "active"}`}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="link"
            onClick={handleMenuItemClick}
          >
            {link.title}
          </Link>
        ))}
        {/* <span className="material-symbols-outlined darkmode-toggle">
          dark_mode
        </span> */}
        <div className="lang">
          {/* <span className="link">He</span>
          <span className="link">En</span> */}
          {Object.keys(lngs).map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18next.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
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
