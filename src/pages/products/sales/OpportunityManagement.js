import img1 from "../../../assets/imgs/sales/Opportunity_new-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Follow the progress of each deal from every angle.",
    content:
      "Utilize SkyzCRM to examine all aspects of the status of the deal, including: data on the competition, changing market prices, internal and external changes that may affect the sale and level of customer interest. Monitor the progress of the sales process comprehensively with up-to-date information that helps you to complete the sale.",
  },
  {
    id: 2,
    title: "Make your business processes more efficient",
    content:
      "Accurately price your products with SkyzCRM. Set the exact amounts, timetables and payment terms to make bids clear to all parties. Get a clearer picture and reduce misunderstandings with your potential customers. Reduce the time it takes to close the deal.",
  },
  {
    id: 3,
    title: "Get real-time information critical to closing sales",
    content:
      "Keep up-to-date with any positive or negative news that may affect your sale. Get vital information from a variety of sources: from the client, from sales people on the ground, online, from other customers or from competitors. Create positive momentum and improve the chances for a successful completion of your sales processes.",
  },
];

const OpportunityManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Opportunity management</h1>
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
            <img src={img1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OpportunityManagement;
