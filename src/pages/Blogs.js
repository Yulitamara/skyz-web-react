import { Helmet } from "react-helmet-async";
import "../assets/scss/_blogs.scss";
import "../assets/scss/base.scss";
import img1 from "../assets/imgs/blogs/1.jpg";

// import Filters from "../components/Filters";

const Blogs = () => {
  return (
    <section dir="rtl" className="blogs">
      <Helmet>
        <title>SkyzCRM</title>
        <meta name="description" content="אתר הבלוגים של Skyz CRM"></meta>
        <link rel="canonical" href="/בלוג"></link>
      </Helmet>
      <h1>Skyz Blog</h1>
      <p>
        ברוך בואכם לאתר הבלוגים של Skyz CRM. האתר כולל מאמרים מקצועיים, אשר
        יציידו אתכם במידע חיוני וטיפים מעניינים, בתחומי מכירות, שיווק, שירות,
        הצלחת לקוח ו- CRM (ניהול קשרי לקוחות). המאמרים יציגו לכם חידושים,
        ניתוחים ומגמות עולמיות לצורך התייעלות בכל אחד מתחומים חשובים אלו. נשמח
        מאוד אם תפיקו מאתר בלוגים זה את המיטב.
      </p>
      {/* <Filters /> */}
      <div className="blogs-container">
        <div className="blog">
          <h3 className="blog-title">
            האם כדאי להעדיף את מודל ה- Cloud CRM על פני On-Premise CRM ו-Hybrid
            CRM?
          </h3>
          <div className="img-container">
            <img src={img1} />
          </div>
          <p>
            לפני שנתחיל בהשוואה בין 3 מודלי העבודה של מערכות לניהול קשרי לקוחות,
            נסביר בקצרה על כל אחד מהם: Cloud crm...
          </p>
        </div>
        <div className="blog">
          <h3 className="blog-title">
            האם כדאי להעדיף את מודל ה- Cloud CRM על פני On-Premise CRM ו-Hybrid
            CRM?
          </h3>
          <div className="img-container">
            <img src={img1} />
          </div>
          <p>
            לפני שנתחיל בהשוואה בין 3 מודלי העבודה של מערכות לניהול קשרי לקוחות,
            נסביר בקצרה על כל אחד מהם: Cloud crm...
          </p>
        </div>
        <div className="blog">
          <h3 className="blog-title">
            האם כדאי להעדיף את מודל ה- Cloud CRM על פני On-Premise CRM ו-Hybrid
            CRM?
          </h3>
          <div className="img-container">
            <img src={img1} />
          </div>
          <p>
            לפני שנתחיל בהשוואה בין 3 מודלי העבודה של מערכות לניהול קשרי לקוחות,
            נסביר בקצרה על כל אחד מהם: Cloud crm...
          </p>
        </div>
        <div className="blog">
          <h3 className="blog-title">
            האם כדאי להעדיף את מודל ה- Cloud CRM על פני On-Premise CRM ו-Hybrid
            CRM?
          </h3>
          <div className="img-container">
            <img src={img1} />
          </div>
          <p>
            לפני שנתחיל בהשוואה בין 3 מודלי העבודה של מערכות לניהול קשרי לקוחות,
            נסביר בקצרה על כל אחד מהם: Cloud crm...
          </p>
        </div>
        <div className="blog">
          <h3 className="blog-title">
            האם כדאי להעדיף את מודל ה- Cloud CRM על פני On-Premise CRM ו-Hybrid
            CRM?
          </h3>
          <div className="img-container">
            <img src={img1} />
          </div>
          <p>
            לפני שנתחיל בהשוואה בין 3 מודלי העבודה של מערכות לניהול קשרי לקוחות,
            נסביר בקצרה על כל אחד מהם: Cloud crm...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
