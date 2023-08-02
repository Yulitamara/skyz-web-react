import img1 from "../../../assets/imgs/sales/marketing-control-1-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Evaluate all of your company’s marketing channels (including telemarketing)",
    content: "Get a comparative overview of the company’s marketing channels with Skyz Marketing. Automatically compare the conversion rate and ROI of company campaigns (emails and SMS), media channels, search engine optimization, social networks and telemarketing. Get an accurate picture of your marketing channels anywhere in real time.",
  },
  {
    id: 2,
    title: "Analyze and compare performance by product segment and target audience",
    content: "Take a measure of your marketing channels in a flexible manner according to various parameters of your choosing. Analyze the effectiveness of these channels by product, size of company or geographic location. Get accurate insights over time and create a landscape of the changing sales trends.",
  },
  {
    id: 3,
    title: "Draw conclusions on the effectiveness of your marketing channels",
    content: "With your comprehensive analysis of the performance of the marketing channels, reach solid conclusions and confident implementation. Share the findings with your marketing team, the sales people and management, and receive important feedback from every level. Determine your marketing KPI’s and make the adjustments for optimal distribution of your marketing budget.",
  },
];

const MarketingControl = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Marketing control</h1>
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
              alt="Marketing control with Skyz CRM"
              title="marketing-control"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingControl;
