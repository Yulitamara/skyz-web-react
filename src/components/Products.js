import sales from "../assets/imgs/products-imgs/sales.png";
import marketing from "../assets/imgs/products-imgs/marketing.png";
import service from "../assets/imgs/products-imgs/service.png";
import "../assets/scss/_products.scss";
import "../assets/scss/base.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  return (
    <section className="products">
      <div className="product">
        <div className="header">
          <img src={sales} alt="sales img" />
          <h2>{t("salesHeader")}</h2>
        </div>
        <p>{t("salesContent")}</p>
        <Link to="/products/skyz-sales/sales/">
          <button className="btn-orange">{t("learnMore")}</button>
        </Link>
      </div>
      <div className="product">
        <div className="header">
          <img src={marketing} alt="marketing img" />
          <h2>{t("marketingHeader")}</h2>
        </div>
        <p>{t("marketingContent")}</p>
        <Link to="/products/skyz-marketing/marketing/">
          <button className="btn-orange">{t("learnMore")}</button>
        </Link>
      </div>
      <div className="product">
        <div className="header">
          <img src={service} alt="service img" />
          <h2>{t("serviceHeader")}</h2>
        </div>
        <p>{t("serviceContent")}</p>
        <Link to="/products/skyz-service/service/">
          <button className="btn-orange">{t("learnMore")}</button>
        </Link>
      </div>
    </section>
  );
};

export default Products;
