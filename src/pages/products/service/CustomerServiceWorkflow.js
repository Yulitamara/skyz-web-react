import img1 from "../../../assets/imgs/service/Customer-service-workflow_new-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";

const paraData = [
  {
    id: 1,
    title: "Manage structured service processes according to the company’s needs",
    content: "Be fully flexible in managing the service process and determining the appropriate format according to the needs of the organization. Adjust the process with Skyz Service to the type of events you are dealing with. Dramatically streamline work processes and improve service delivery.",
  },
  {
    id: 2,
    title: "Create a proper workflow for service personnel",
    content: "Create a proper and effective workflow for each service call with Skyz Service. Streamline all phases – from receiving the service call until the finishing of a job to the satisfaction of the customer, with the necessary approvals from management during the process. Draw the right flow path for you with the support staff. Implement an optimal result for all of your service staff easily and quickly.",
  },
  {
    id: 3,
    title: "Simplify the issue of approvals and requests for work proposals",
    content: "Manage the issue of requests for work proposals and approvals effectively. Skyz is an easy and friendly customer relationship management solution that allows management or any other authorized professional to approve an action, request or quote, from anywhere in real time. Reduce delays in service processes and improve your company productivity.",
  },
];

const CustomerServiceWorkflow = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Workflow</h1>
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
              alt="Workflow with Skyz Service"
              title="Customer-service-workflow_new"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default CustomerServiceWorkflow;
