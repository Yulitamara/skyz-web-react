import img1 from "../../../assets/imgs/sales/Marketing-Automation-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Get a comprehensive marketing overview",
    content: "Provide yourself and each marketing and sales person in the department with a clear and comprehensive marketing picture. Be up to date with Skyz Marketing on marketing campaigns, statistics, charts, graphs, reports, articles, news and opinions. Allow yourself to make quick and effective decisions with all the necessary data.",
  },
  {
    id: 2,
    title: "Promote agility in your marketing department and save precious time",
    content: "Speed up the decision-making process within your department with Skyz Marketing. Effectively manage campaigns, databases, customer clubs, and information sharing with one central tool. By analyzing information quickly and accurately, you can take effective marketing control from any location and save valuable time.",
  },
  {
    id: 3,
    title: "Take advantage of automated processes to streamline marketing",
    content: "Streamline your marketing processes with smart automation through Skyz Marketing. By investing in automated marketing processes, you optimize the time it takes to complete an effective marketing campaign and can manage your team more efficiently.",
  },
];

const MarketingAutomation = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Marketing Automation</h1>
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

export default MarketingAutomation;
