import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>SkyzCRM</title>
        <meta
          name="description"
          content="אתר הבלוגים של Skyz CRM"
        ></meta>
        <link rel="canonical" href="/בלוג"></link>
      </Helmet>
      <h1>Skyz Blog</h1>
    </>
  );
};

export default Blog;
