import img1 from "../../../assets/imgs/sales/Field-based-marketing-management-600x747.png";

const paraData = [
  {
    id: 1,
    title: "See essential marketing information from anywhere",
    content: "Skyz Marketing cloud technology gives you access to marketing information from anywhere, in real time. Connect to the system from any computer (stationary, mobile, tablet, smartphone, iPad, iPhone) and view the latest information in a clear and informative way for accurate decision-making. Quickly find the information you need while in the field with the system’s intelligent search engine.",
  },
  {
    id: 2,
    title: "Perform immediate marketing operations using your smartphone",
    content: "Do you find yourself out of the office and needing to issue a direct marketing campaign to selected customers without delay? You can set up an SMS campaign using Skyz Marketing directly from your phone. Take complete control from the field and turn a lost hour of travel into a work hour.",
  },
  {
    id: 3,
    title: "Analyze your marketing success and make decisions anywhere",
    content: "Analyze marketing information when you need to do it: whether at home, on the way to a meeting, during a meeting with a client or even out of the country on vacation. Skyz Marketing allows you to make decisions and draw the proper conclusions at any time or from any location.",
  },
];

const FieldBasedMarketingManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Field based marketing management</h1>
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

export default FieldBasedMarketingManagement;
