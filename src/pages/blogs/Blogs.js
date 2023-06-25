import { Helmet } from "react-helmet-async";
import "./blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <Helmet>
        <title>SkyzCRM</title>
        <meta name="description" content="אתר הבלוגים של Skyz CRM"></meta>
        <link rel="canonical" href="/בלוג"></link>
      </Helmet>
      <h1>Skyz Blog</h1>
    </div>
  );
};

export default Blogs;
