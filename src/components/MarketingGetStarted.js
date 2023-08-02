import { Link } from "react-router-dom";

const MarketingGetStarted = () => {
  return (
    <div className="get-started red-bg">
      <div className="left">
        <h1>Create smart marketing campaigns</h1>
        <p>
          Expand your customer base through active, intelligent campaigns, keep
          existing customers satisfied and make smarter marketing decisions in
          real time with Skyz Marketing.
        </p>
      </div>
      <div className="right">
        <Link to="/contact">
          <button className="btn red-text">GET STARTED</button>
        </Link>
      </div>
    </div>
  );
};

export default MarketingGetStarted;
