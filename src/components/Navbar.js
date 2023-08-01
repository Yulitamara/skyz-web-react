import "../assets/scss/_navigation.scss";
import logo from "../assets/imgs/Skyz-CRM-Avada-Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

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

  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
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
      <MenuOutlined onClick={() => setMenuActive(!menuActive)} />
    </header>
  );
};

export default Navbar;
