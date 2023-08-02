import img1 from "../../../assets/imgs/sales/Contact-management-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Get a complete overview of customer relationships at a glance",
    content:
      "SkyzCRM gives you access to all your customer information at a glance. See all the vital information in real time: up to date customer actions, company hierarchy, customer history, current status, updates, alerts and social media insights. Get a 360-degree view of your client’s situation in an instant. Be informed to respond correctly and quickly to customers.",
  },
  {
    id: 2,
    title: "Map out your connections for easy networking",
    content:
      "Create a flexible and unlimited map of connections with SkyzCRM. Establish an expanding client network system that allows you to penetrate new organizations through internal connections. SkyzCRM helps you increase your customer base and sales volume through your accumulated customer contacts.",
  },
  {
    id: 3,
    title: "Get important insights from analyzing customer history",
    content: "Equip yourself with valuable information by viewing customer history. Use SkyzCRM’s advanced search to find important historical data quickly. Just one click and you see the future sales potential of the customer, problems and risks in working with them, contacts they have with employees from other companies and compliance with agreements or payments.",
  },
];

const ContactManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Contact management</h1>
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
              alt="Contact management with Skyz CRM"
              title="Contact-management"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactManagement;
