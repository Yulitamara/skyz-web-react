import img1 from "../../../assets/imgs/service/SLA-1-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Produce smart contracts that are easily adaptable to your SLAs",
    content: "Manage your service contracts for customers and vendors through Skyz Service. Help your technical staff produce custom contracts based on the type of service and the organization’s needs. Make it a simple task to extend the SLA and define the level of customer service needed. By defining the service terms more effectively, you improve the profit margins.",
  },
  {
    id: 2,
    title: "Retrieve a requested contract in real time from your archive",
    content: "Looking for a contract from two months ago? Find it quickly and easily with Skyz Service. Manage a large-scale digital service contract archive for customers and suppliers with a powerful search engine. Give yourself the opportunity to view any contract in real time outside of the office with your smartphone.",
  },
  {
    id: 3,
    title: "Get two-way alerts before you end a contractual relationship",
    content: "In case of contract termination, make alerts for both for you and the customer through Skyz Service. Send a reminder to the support staff and to the customer when the end of a contract nears. Avoid an unpleasant situation where a good customer’s contract needs to be terminated because of a lapse of time. Show your customers that you care with timely contract reminders!",
  },
];

const SLA = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Service-Level Agreement Management (SLA)</h1>
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
              alt="Service Level Agreement with Skyz CRM"
              title="SLA"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SLA;
