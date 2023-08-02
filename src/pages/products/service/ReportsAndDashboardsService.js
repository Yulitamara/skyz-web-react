import img1 from "../../../assets/imgs/service/Dashboard-service-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Receive reports and graphs automatically for every business process",
    content: "Skyz Service lets you view innovative reports on your customer service activities—it’s much more than a centralized dashboard! Get relevant reports, charts, and graphs that let you gain insights in real time and make quicker decisions.",
  },
  {
    id: 2,
    title: "Draw accurate conclusions using dashboards tailored to your needs",
    content: "You can match dashboards to your requirements with Skyz Service. Get great flexibility when it comes to producing reports, charts, and graphs according to your product and organizational needs. Get insights that are right for your customer service department while maximizing efficiency.",
  },
  {
    id: 3,
    title: "We have created reports that will help you make decisions in the field",
    content: "Pull up our dashboards from anywhere in real time. View Skyz Service in reports, charts, and graphs with your tablet and smartphone on the way to a call or during critical moments in the field. Let Skyz Service reports guide your team to making the best possible decisions under pressure.",
  },
];

const ReportsAndDashboardsService = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Reports and Dashboards</h1>
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
              alt="Skyz Service dashboards"
              title="Dashboard-service"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsAndDashboardsService;
