import img1 from "../../../assets/imgs/service/Field-based-service-ngmt-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";

const paraData = [
  {
    id: 1,
    title: "Direct service calls to the right person",
    content: "Route service calls to the right field technician based on automatic structured prioritization (type of call, complexity, and customer location). Skyz Service finds the correct person to receive and handle these service events as if they were working from the office. Make sure that your field technicians are allowed to work effectively and are supported for any eventualities.",
  },
  {
    id: 2,
    title: "Monitor your field technician’s performance",
    content: "After receiving a service call, follow the activity with Skyz from the evaluation by the tech to its eventual completion, including feedback on the satisfaction of the customer. Make sure each of your tech staff was supported by professional assistance, which will be updated in real time in the customer’s service call notes. Get a comprehensive picture of the events in the field and your employees performance, whether they require more training or a behavior check.",
  },
  {
    id: 3,
    title: "Be able to generate important documentation in the field",
    content: "Take advantage of Skyz Service’s technological capabilities for producing vital documentation on the go. Sign orders during the meeting, update important technical details online and confirm finished work with the customer via smartphone. Perform required actions in real time without needing to back in the office.",
  },
];

const FieldBasedServiceMgmt = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Field based service management</h1>
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
              alt="Field based service with Skyz CRM"
              title="Field-based-service-ngmt"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default FieldBasedServiceMgmt;
