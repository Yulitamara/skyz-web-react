import { Link } from "react-router-dom";
import "../assets/scss/_hero.scss";
import "../assets/scss/base.scss";
import heroImg from "../assets/imgs/hero-img.svg";

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        Skyz<span>CRM</span>
      </h1>
      <p>
        Manage customers in real time at a glance <span className="dot"></span>
      </p>
      <div class="btns-container">
        <Link to="/contact" className="btn-primary">
          Get Started
        </Link>
        <Link to="/login" className="btn-primary">
          Login
        </Link>
      </div>
      <img src={heroImg} alt="hero-img" className="hero-img" />
    </section>
  );
};

export default Hero;
