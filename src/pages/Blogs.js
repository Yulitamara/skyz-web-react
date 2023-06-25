import { Helmet } from "react-helmet-async";
import "../assets/scss/_blogs.scss";
import {PostMasonry} from "../components/common";
import trending from "../assets/mocks/trending.js"

const Blogs = () => {
  return (
    <section className="blogs">
      <Helmet>
        <title>SkyzCRM</title>
        <meta name="description" content="אתר הבלוגים של Skyz CRM"></meta>
        <link rel="canonical" href="/בלוג"></link>
      </Helmet>
      <h1>Skyz Blog</h1>
      <div className="row">
        <h2>Trending Posts</h2>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
};

export default Blogs;
