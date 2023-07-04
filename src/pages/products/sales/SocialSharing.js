import img1 from "../../../assets/imgs/sales/social-sharing.png";

const paraData = [
  {
    id: 1,
    title: "Share ideas with your salespeople in real time",
    content:
      "Have your salespeople encountered a problem? Allow them to share it with you and other staff through SkyzCRM. Brainstorm, transfer files and essential information while drawing conclusions together in real time. Sharing with the team increases the ability to solve complex situations quickly and efficiently.",
  },
  {
    id: 2,
    title: "“Like” Skyz CRM for social networks",
    content:
      "Broaden your information about the potential customer by linking to social networks feeds from SkyzCRM. Understand more about your customer’s personal history, interests and connections. Find friends that you have in common who can help you. Give yourself a chance to enter into successful negotiations with a fuller understanding of your client’s background.",
  },
  {
    id: 3,
    title: "Add new databases to open up opportunities",
    content:
      "Get SkyzCRM to import and share databases. Connect to potential sources of information and synchronize them to the system. Refresh your client lists, discover new audiences, share your company’s products, and start selling.",
  },
];

const SocialSharing = () => {
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

export default SocialSharing;
