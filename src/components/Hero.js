import { Link } from "react-router-dom";
import "../assets/scss/_hero.scss";
import "../assets/scss/base.scss";


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
    </section>
  );
};

export default Hero;
