import img1 from "../../../assets/imgs/service/Social-customer-service-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Brainstorm with the service personnel in real time",
    content:
      "Are your technicians out dealing with a difficult service matter? Allow them to share and consult with you and other staff through Skyz Service. Brainstorm, transfer files and essential information, and figure out the solution in real time. More people focusing on a complex problem will save time and please the customer.",
  },
  {
    id: 2,
    title: "“Like” Skyz for social networks",
    content:
      "Find a wealth of information about your potential customers by connecting to social networks through Skyz Service. Understand more about customer characteristics, history and events so you can relate to them on a personal level. Find out information about previous events concerning the company and how you can deal with them.",
  },
  {
    id: 3,
    title: "Share with expert communities on a variety of issues",
    content:
      "Create expert communities for the areas of service you provide. Connect to them via Skyz Service through existing events on the calendar and through social groups. Get real-time assistance from outside of your company as you deal with professional questions and issues. Find solutions faster and improve your customer service.",
  },
];

const SocialCustomerService = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Social customer service</h1>
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
              alt="Social customer service with Skyz CRM"
              title="Social-customer-service"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialCustomerService;
