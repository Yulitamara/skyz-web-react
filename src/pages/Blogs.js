import { Helmet } from "react-helmet-async";
import "../assets/scss/_blogs.scss";

const Blogs = () => {
  return (
    <section className="blogs">
      <Helmet>
        <title>SkyzCRM</title>
        <meta name="description" content="אתר הבלוגים של Skyz CRM"></meta>
        <link rel="canonical" href="/בלוג"></link>
      </Helmet>
      <h1>Skyz Blog</h1>
      <div className="filter-container"></div>
      <div className="row">
      </div>
    </section>
  );
};

export default Blogs;
