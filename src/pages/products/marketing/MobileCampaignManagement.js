import img1 from "../../../assets/imgs/sales/mobile-campaign-management_mew-600x747.png";
import MarketingGetStarted from "../../../components/MarketingGetStarted";

const paraData = [
  {
    id: 1,
    title: "Join the mobile marketing revolution",
    content: "Advance to smart mobile marketing via iPhones and smartphones. Send SMS messages from any location via Skyz Marketing. Take advantage of mobile networks to send your timely pitches to clients and potential clients.",
  },
  {
    id: 2,
    title: "Find your targeted audience everywhere",
    content: "Reach targeted customers anywhere, in real time. Focus your messages and edit broader marketing messages to specific clients while on the go using Skyz Marketing. Select chosen fields such as product type, company size and geographic location.",
  },
  {
    id: 3,
    title: "Maintain personal relationships with existing and potential customers",
    content: "Improve your interactions with existing and potential customers. With Skyz MARKETING, send smart and personal marketing messages to build solid relationships (especially with customers with whom you are negotiating). Use Skyz Marketing as a tool that helps you to create a sense of community with your client base.",
  },
];

const MobileCampaignManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Mobile Campaign Management</h1>
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
              alt="Mobile campaign with Skyz CRM"
              title="mobile-campaign-management_mew"
            />
          </div>
        </div>
        <MarketingGetStarted />
      </div>
    </>
  );
};

export default MobileCampaignManagement;
