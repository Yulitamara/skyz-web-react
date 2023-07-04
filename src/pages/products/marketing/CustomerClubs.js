import img1 from "../../../assets/imgs/sales/customers-club-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Establish attractive customer clubs whenever you need them",
    content: "Build the infrastructure to create and run successful customer clubs through Skyz Marketing. Sign up new customers into the club’s membership list through a unique marketing registration system. Understand how easy and convenient it is to send updates and promotions on a regular basis.",
  },
  {
    id: 2,
    title: "Send timely newsletters with the click of a button",
    content: "Marketing newsletters help strengthen and maintain customer loyalty—send them through Skyz’s advanced email system. Design your newsletter to suit your organization’s needs with different templates that are provided. Enable collaborative content and production with your staff using an advanced document management system.",
  },
  {
    id: 3,
    title: "Up-selling and cross-selling will help you to increase revenues",
    content: "Increase your revenues by sending out successful messaging that promote up-sales and cross-sales. Pitch your company’s customer base with Skyz Marketing according to their interests and budget. With well thought out offers and increased customer communication, increase your revenue with less marketing expenditure.",
  },
];

const CustomerClubs = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Customer clubs</h1>
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

export default CustomerClubs;
