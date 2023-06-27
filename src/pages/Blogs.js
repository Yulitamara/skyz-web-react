import { Helmet } from "react-helmet-async";
import "../assets/scss/_blogs.scss";
import { MasonryPost, PostMasonry, PostGrid } from "../components/common";
import trending from "../assets/mocks/trending.js";
import featured from "../assets/mocks/featured.js";

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1 / 1 / 2 / 3",
    height: "300px",
  },
  1: {
    height: "300px;",
  },
  3: {
    height: "630px",
    marginLeft: "30px",
    maxWidth: "630px",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
    post.author = "Miguel Coder";
    post.description =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.";
  });
};

const recentPosts = [...trending, ...featured, ...featured];

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

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
        <h2>Featured Posts</h2>
        <section className="featured-posts-container">
          <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
          <MasonryPost post={lastFeatured} tagsOnTop={true} />
        </section>
      </div>
      <div className="row">
        <h2>Recent Posts</h2>
        <PostGrid posts={recentPosts} />
      </div>
      <div className="row">
        <h2>Trending Posts</h2>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
};

export default Blogs;
