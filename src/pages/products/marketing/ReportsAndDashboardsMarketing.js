import img1 from "../../../assets/imgs/sales/Reports-and-Dashboards-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Get reports and marketing graphs",
    content: "Skyz Marketing lets you view innovative reports—it’s much more than a centralized dashboard! Get relevant marketing reports, charts, and graphs that let you gain insights in real time and make quicker decisions.",
  },
  {
    id: 2,
    title: "Draw accurate conclusions using dashboards tailored to your needs",
    content: "You can match dashboards to your marketing requirements with Skyz Marketing. Produce reports, charts, and graphs according to your campaign or departmental needs. Draw the marketing conclusions that are right for your business while maximizing efficiency.",
  },
  {
    id: 3,
    title: "Get decision-making reports both at home and in the field",
    content: "Reports, charts, and graphs are available on your tablet and smartphone in real-time. Skyz Marketing presents data in an intuitive way anywhere: whether you are in the office, at home, in the field or out of the country. Present the results of your marketing campaigns impressively to the rest of the company and inspire success.",
  },
];

const ReportsAndDashboardsMarketing = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Reports and Dashboards – Marketing</h1>
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
            <img src={img1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsAndDashboardsMarketing;
