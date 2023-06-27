import { Helmet } from "react-helmet-async";
import "../assets/scss/_blogs.scss";
import "../assets/scss/base.scss";

import Filters from "../components/Filters";

const Blogs = () => {
  return (
    <section className="blogs">
      <Helmet>
        <title>SkyzCRM</title>
        <meta name="description" content="אתר הבלוגים של Skyz CRM"></meta>
        <link rel="canonical" href="/בלוג"></link>
      </Helmet>
      <h1>Skyz Blog</h1>
      <p dir="rtl">
        ברוך בואכם לאתר הבלוגים של Skyz CRM. האתר כולל מאמרים מקצועיים, אשר
        יציידו אתכם במידע חיוני וטיפים מעניינים, בתחומי מכירות, שיווק, שירות,
        הצלחת לקוח ו- CRM (ניהול קשרי לקוחות). המאמרים יציגו לכם חידושים,
        ניתוחים ומגמות עולמיות לצורך התייעלות בכל אחד מתחומים חשובים אלו. נשמח
        מאוד אם תפיקו מאתר בלוגים זה את המיטב.
      </p>
      <Filters />
      <div className="row"></div>
    </section>
  );
};

export default Blogs;
