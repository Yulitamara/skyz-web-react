import { Link } from "react-router-dom";

const ServiceGetStarted = () => {
  return (
    <div className="get-started green-bg">
      <div className="left">
        <h1>Improve your organization’s customer service</h1>
        <p>
          Manage service processes quickly, support your customers from anywhere
          you happen to be and strengthen their loyalty with Skyz Service.
        </p>
      </div>
      <div className="right">
        <Link to="/contact">
          <button className="btn green-text">GET STARTED</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceGetStarted;
