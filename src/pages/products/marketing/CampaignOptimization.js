import img1 from "../../../assets/imgs/sales/campaign-optimization-1-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Measure and analyze campaign results in real time",
    content:
      "Manage your company marketing campaigns easily and effectively, measuring and comparing results using Skyz Marketing. Define and compare variables such as leads coming from a campaign, opportunities created, sales that closed, company size and location. Compare the data in one program in order to draw conclusions that benefit the organization.",
  },
  {
    id: 2,
    title: "Get insights into customer trends and market direction",
    content:
      "Gain insights from your marketing data in real time. Use the data to create charts and graphs – to illustrate trends in a simple yet elegant way. Share concerns among your department staff and determine the course of action for future advertising campaigns.",
  },
];

const CampaignOptimization = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Campaign optimization</h1>
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

export default CampaignOptimization;
