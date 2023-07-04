import img1 from "../../../assets/imgs/sales/email-campaign-management-1-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Take advantage of the marketing power of email",
    content: "Promote successful marketing campaigns by targeting emails to potential customers and distribution lists. Send promotions, news or updates and drive more interest. Use our smart templates to design your publications with ease and maximum flexibility from anywhere.",
  },
  {
    id: 2,
    title: "Distribute to selected target audiences with maximum flexibilit",
    content: "Skyz Marketing allows you to choose the target audience for e-mailings. Send focused marketing messages to specific segments of recipients and increase the conversion rate. Allow additional recipients to join the list or download material themselves automatically.",
  },
  {
    id: 3,
    title: "Keep track of your campaigns until the sales pitch",
    content: "Track incoming calls that resulted from your email to recipients. Manage the leads effectively with Skyz Marketing and turn them into actual sales opportunities and transactions. Get a complete overview of the campaign from the email blast and qualification of leads to the final stage of the sale to customers.",
  },
];

const EmailCampaignManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Email campaign Management</h1>
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

export default EmailCampaignManagement;
