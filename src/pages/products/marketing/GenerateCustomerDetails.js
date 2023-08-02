import img1 from "../../../assets/imgs/sales/generate-cstomer-details-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Get vital information about customer behavior",
    content: "Collect real-time data from your interactions with customers and their responses. Analyze the data and develop important insights with Skyz Marketing. Update the data to the relevant customer files anywhere, from any computer, in real time.",
  },
  {
    id: 2,
    title: "Produce and send out questionnaires and satisfaction surveys",
    content: "Take the pulse of your customers on a regular basis, using SKYZ ‘s templates to produce questionnaires and satisfaction surveys. Send them out and input the recipients replies automatically into the system, tagging important details that you get in response.",
  },
  {
    id: 3,
    title: "Cross reference sources of information to get an accurate picture of who your customers really are",
    content: "Look at your customers from every angle possible. Cross referencing sources with maximum efficiency is easy with Skyz. With a clear, accurate picture of your customer characteristics you can map their behavior for your marketing needs.",
  },
];

const GenerateCustomerDetails = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Generate customer details</h1>
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
              alt="Generate customer details with Skyz CRM"
              title="generate-cstomer-details"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateCustomerDetails;
