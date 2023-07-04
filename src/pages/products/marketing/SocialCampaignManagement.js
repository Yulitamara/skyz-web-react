import img1 from "../../../assets/imgs/sales/social-campaign-managment-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Create a unique campaign customized to your target audience",
    content: "With Skyz Marketing and social networks you can reach more people in interesting ways. Give a personal and exciting update to any target audience you want through Facebook, Instagram or LinkedIn. Push creative campaigns to your customers and manage these campaigns easily and efficiently.",
  },
  {
    id: 2,
    title: "Increase positive influence on your customers by sharing content",
    content: "Share more content with Skyz Marketing. Take advantage of the recommendations and marketing content available through Skyz to educate your target audience. Increase exposure to both helpful content and expert opinions to become an influencer in your field.",
  },
  {
    id: 3,
    title: "Manage your Facebook pages directly from the system",
    content: "Allow yourself to effectively manage your company Facebook and LinkedIn pages with Skyz. Leverage the system’s customer management capabilities which will provide you with many more opportunities to create qualified leads. Turn “likes” and followers into actual customers.",
  },
];

const SocialCampaignManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Social Campaign Management</h1>
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

export default SocialCampaignManagement;
