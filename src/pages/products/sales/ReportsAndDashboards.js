import img1 from "../../../assets/imgs/sales/Reports-Dashboards-1-600x395.png";

const paraData = [
  {
    id: 1,
    title: "Receive reports and graphs automatically for every business process",
    content: "SkyzCRM lets you view innovative reports—it’s much more than a centralized dashboard! Get relevant reports, charts, and graphs that let you gain insights in real time and make quicker decisions.",
  },
  {
    id: 2,
    title: "Draw accurate conclusions using dashboards tailored to your needs",
    content: "You can match dashboards to your requirements with SkyzCRM. Get great flexibility when it comes to producing reports, charts, and graphs according to your product and organizational needs. Draw conclusions that are right for your business selling processes while maximizing efficiency.",
  },
  {
    id: 3,
    title: "Get decision-making reports both at home and in the field",
    content: "Reports, charts, and graphs are available on your tablet and smartphone in real-time. SkyzCRM presents data in an impressive way anywhere: in the office, at home, in the field abroad. There is no better way to impress a client than by pulling out a sharp looking relevant report or graph during negotiations.",
  },
];

const ReportsAndDashboards = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Reports & Dashboards</h1>
            {paraData.map((para) => {
              return (
                <div className="para" key={para.id}>
                  <h2>{para.title}</h2>
                  <p>{para.content}</p>
                </div>
              );
            })}
          </div>
          <div className="left">
            <img
              src={img1}
              alt="Skyz Sales dashboards"
              title="Reports-&-Dashboards"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsAndDashboards;
