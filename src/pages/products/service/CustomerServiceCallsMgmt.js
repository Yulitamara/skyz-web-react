import img1 from "../../../assets/imgs/service/Customer-Service-calls-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Supervise your customer service calls from anywhere online",
    content: "Monitor calls in real-time either in the office or in the field with your smartphone. With Skyz Service you can assign any call to the right technical person through a structured process (BPM) based on the type of call, the complexity or type of customer. Create an optimal prioritization for the department and manage the customer service process efficiently and professionally, improving customer satisfaction.",
  },
  {
    id: 2,
    title: "Keep track of every call",
    content: "Monitor customer service calls better via Skyz. Make sure that the calls received are routed to the appropriate technical personnel and handled in the most professional manner. Monitor your call center schedules and improve your response to customer service issues.",
  },
  {
    id: 3,
    title: "Get an overview of the call center situation at a glance",
    content: "Get a full rundown of all service calls at a glance through Skyz Service. Help the call center staff work through overload periods with the proper data in front of them. Make sure that calls are routed to the right technical people, upgrading the professionalism of your call service system.",
  },
];

const CustomerServiceCallsMgmt = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Customer Service calls management</h1>
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
              alt="Service calls management with Skyz CRM"
              title="Customer-Service-calls"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerServiceCallsMgmt;
