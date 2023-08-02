import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
// import Demo from "../components/Demo";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SkyzCRM</title>
        <meta
          name="description"
          content="לניהול לקוחות בכל מקום בזמן אמת"
        ></meta>
        <link rel="canonical" href="/"></link>
      </Helmet>
      <Hero />
      {/* <Demo /> */}
      <About />
      <Products />
    </>
  );
};

export default Home;
