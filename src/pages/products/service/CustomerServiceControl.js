import img1 from "../../../assets/imgs/service/service-control-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Visit the 360 degree service processes.",
    content: "Get a 360-degree view of customer service processes at a glance. Watch and monitor from anywhere: receiving quick service calls, updating vital information in real time, handling customers correctly, dealing with complex events, and providing smart solutions. Give yourself insights that will help improve service quality.",
  },
  {
    id: 2,
    title: "Get real-time alerts about critical situations",
    content: "Tighten control of your technical team with Skyz Service. Manage an alert system that will alert you everywhere (via your smartphone) of failures in the operation of the service to customers, such as: no response to calls, deviations from scheduled schedules, complicated events. Intervened in real time in the processes and helped improve the situation.",
  },
  {
    id: 3,
    title: "Analyze your situation against similar cases",
    content: "Did the support team encounter a complex event? Retrieve similar cases from the Skyz Service event archive. Analyze your situation in the current case against events you have successfully dealt with in the past. Find the optimal golden path while taking into account existing conditions for a successful and quick conclusion of the event.",
  },
  {
    id: 4,
    title: "Make adjustments as needed",
    content: "Give yourself the ability to make adjustments in service processes due to sudden changes, both internal and external. We have updated the built-in processes as required by Skyz from anywhere in real time. We updated emergency guidelines and procedures and shared the technical staff. Keep your finger on the pulse and keep your service steady and high quality.",
  },
];

const CustomerServiceControl = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Customer service Control</h1>
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
              alt="Customer service control with Skyz CRM"
              title="service-control"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerServiceControl;
