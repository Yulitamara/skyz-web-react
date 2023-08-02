import img1 from "../../../assets/imgs/sales/сcustomizable-analis-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Create a successful marketing measurement road map",
    content: "Use the advanced capabilities of Skyz Marketing to analyze the marketing information you have accumulated. Get insights into every aspect related to the needs of existing customers. Brainstorm marketing solutions with your team and provide a tailored solution to suit each client.",
  },
  {
    id: 2,
    title: "Send personalized recommendations to your customers",
    content: "Implement the conclusions from your marketing information analysis and send personalized smart recommendations to customers with Skyz Marketing. Contact your customers with these messages via email or SMS to their mobile phones, anytime you choose.",
  },
  {
    id: 3,
    title: "Make your customer a part of the family",
    content: "Send your clients personal marketing messages as if they are the only customer working with you. Avoid giving them the feeling that they are just another card on your company’s rolodex. Use Skyz Marketing to build messages with caring and personal expression automatically and efficiently. Embrace them warmly and let them know you care.",
  },
];

const CustomizableInformationAnalysis = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Customizable information analysis</h1>
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
              alt="One on one marketing with Skyz CRM"
              title="сustomizable-analis"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizableInformationAnalysis;
