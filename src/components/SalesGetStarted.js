import { Link } from "react-router-dom";

const SalesGetStarted = () => {
  return (
    <div className="get-started">
      <div className="left">
        <h1>Increase your organization’s sales.</h1>
        <p>
          Manage sales processes with customers efficiently and improve your
          bottom line by increasing profits with Skyz Sales.
        </p>
      </div>
      <div className="right">
        <Link to="/contact">
          <button className="btn">GET STARTED</button>
        </Link>
      </div>
    </div>
  );
};

export default SalesGetStarted;
