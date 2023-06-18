import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        Skyz<span>CRM</span>
      </h1>
      <p>Manage customers in real time at a glance.</p>
      <div class="btns-container">
        <a href="#contact" className="btn-primary">
          Get Started
        </a>
        <a href="#login" className="btn-primary">
          Login
        </a>
      </div>
    </div>
  );
};

export default Hero;
