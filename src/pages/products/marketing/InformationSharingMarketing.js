import img1 from "../../../assets/imgs/sales/information-sharing_new-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Marketing information sharing",
    content: "Deliver vital marketing information to your sales and marketing department through Skyz Marketing. Share new marketing content from various media sources, along with completed questionnaires, surveys and competitive data. Increase the confidence of your employees negotiating and supporting customers with up to date information.",
  },
  {
    id: 2,
    title: "Update marketing actions in real time",
    content: "Collaborate with the sales team when issuing a promotional email campaign or transmitting a marketing message via SMS. Make sure that even people in the field are in the know through Skyz Marketing. Having the entire team on the same page will maximize your results.",
  },
  {
    id: 3,
    title: "Enable retrieval of information and tips from any location",
    content: "Provide staff inside and outside the office with immediate access to marketing information. We make it easy to update any information, data, news or important detail into Skyz Marketing customer files on a regular basis. Take advantage of the system’s smart tagging and search engine to retrieve data in real-time from any computer, anywhere.",
  },
];

const InformationSharingMarketing = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Information sharing</h1>
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

export default InformationSharingMarketing;
