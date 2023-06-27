import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";

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
      <About />
    </>
  );
};

export default Home;
