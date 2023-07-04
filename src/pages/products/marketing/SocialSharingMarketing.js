import img1 from "../../../assets/imgs/sales/social-sharing-2-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Present marketing planning to members of your organization",
    content: "Planning to issue a special e-mail campaign? Innovative newsletter? Show your fellow employees the purpose your marketing moves and advertising content through Skyz Marketing. Share the company’s marketing processes, get more opinions from different perspectives, and make employees more connected to company marketing activities and branding.",
  },
  {
    id: 2,
    title: "Get feedback from different company locations in real time",
    content: "Receive tips from your fellow employees while planning your marketing moves from anywhere. Share ideas and advice via Skyz from any computer, in real time. Make any adjustments to your campaigns accordingly to execute the correct and optimal moves.",
  },
  {
    id: 3,
    title: "Build focus groups",
    content: "Let the marketing team build and share information from focus groups to sharpen marketing actions. Manage these groups easily and efficiently with Skyz Marketing, using the important marketing information you received to better understand your consumers and fine tune your marketing decisions.",
  },
];

const SocialSharingMarketing = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Social sharing</h1>
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

export default SocialSharingMarketing;
