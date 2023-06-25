import "./hero.css";

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
        <a href="#contact" className="btn-primary">
          Get Started
        </a>
        <a href="#login" className="btn-primary">
          Login
        </a>
      </div>
    </section>
  );
};

export default Hero;
