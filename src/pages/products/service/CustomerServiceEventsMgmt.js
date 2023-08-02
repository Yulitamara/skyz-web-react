import img1 from "../../../assets/imgs/service/Customer-service-events-mgmt-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";

const paraData = [
  {
    id: 1,
    title: "Manage the entire service process online",
    content: "Has a customer service crisis occurred while you were out of the office? Manage it effectively with Skyz Service as if you were there in the call center. Take full control of the whole process from understanding the situation to finding the right solution. Treat any problem that arises in real time from any location. Give the customer a quick, personal response and find peace of mind for them and for you.",
  },
  {
    id: 2,
    title: "Allow all those involved in a service crisis to get the full picture",
    content: "How many staff and subcontractors are involved in the situation? Connect them all via Skyz Service to work on a resolution. Get a comprehensive picture of the contribution of each support person and contractor at any point in time. Prevent the unnecessary waste of resources for each service provider. Effectively monitor the progress of handling any event that comes up.",
  },
  {
    id: 3,
    title: "Update details and send out reminders",
    content: "Good service depends on the tiny details. With Skyz Service we have updated every detail of a service event in real time. You can then create an accurate support process with comprehensive information. Automatically send out warnings and reminders, avoiding unnecessary service delays. Make excellent service a priority with the right CRM.",
  },
];

const CustomerServiceEventsMgmt = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Customer Service events management</h1>
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
              alt="Service events management with Skyz CRM"
              title="Customer-service-events-mgmt"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default CustomerServiceEventsMgmt;
