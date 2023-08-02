import img1 from "../../../assets/imgs/service/service-information-management-3-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Make it a team effort on calls and service",
    content:
      "Manage customer support capabilities with Skyz Service by sharing information with the service team. Brainstorm while looking over the complete customer file and how earlier calls were handled. Getting tips and advice online will cut the time your team takes to finish the job.",
  },
  {
    id: 2,
    title: "Share information and files from any device, anywhere, anytime",
    content:
      "Have you finished up a job at a customer’s site? Update and tag it on the SkyzCRM client card directly from your smartphone. Record as many calls as you want and how they were resolved for future reference. This will make SkyzCRM a vast, indispensable knowledge base available to your service staff in the office and in the field.",
  },
];

const CustomerServiceInformationMgmt = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Customer service information management</h1>
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
              alt="Information management with Skyz Service"
              title="service-information-management"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerServiceInformationMgmt;
