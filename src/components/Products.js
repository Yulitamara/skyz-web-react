import sales from "../assets/imgs/products-imgs/sales.png";
import marketing from "../assets/imgs/products-imgs/marketing.png";
import service from "../assets/imgs/products-imgs/service.png";
import "../assets/scss/_products.scss";
import "../assets/scss/base.scss";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="products">
      <div className="product">
        <div className="header">
          <img src={sales} />
          <h2>SALES</h2>
        </div>
        <p>
          Provides an up-to- date snapshot of lead management, opportunity
          management, contacts, sales people, transaction management and smart
          reports.
        </p>
        <Link to="/sales">
          <button className="btn-primary">Learn More</button>
        </Link>
      </div>
      <div className="product">
        <div className="header">
          <img src={marketing} />
          <h2>MARKETING</h2>
        </div>
        <p>
          Proactively expand your customer base. Manage and follow your
          campaigns via e-mail, mobile and social networks.
        </p>
        <button className="btn-primary">Learn More</button>
      </div>
      <div className="product">
        <div className="header">
          <img src={service} />
          <h2>SERVICE</h2>
        </div>
        <p>
          Handle service calls from any location in real time. Monitor service
          processes at a glance and manage them effectively until they are
          successfully completed.
        </p>
        <button className="btn-primary">Learn More</button>
      </div>
    </section>
  );
};

export default Products;
