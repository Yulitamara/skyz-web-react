import img1 from "../../../assets/imgs/sales/Sales-management_new-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Get higher ROI from your telemarketing unit",
    content:
      "SkyzCRM contributes to smart, advanced and professional telemarketing. Supervise and help your employees optimize their sales calls. Let salespeople monitor their performance in real time. Adapt SkyzCRM’s sales system to your company sales processes with maximum flexibility. Achieve peak ROI through better understanding of the telemarketing process.",
  },
  {
    id: 2,
    title: "Simultaneously receive incoming calls with on screen customer card",
    content:
      "Any incoming calls are synced with the customer’s details with SkyzCRM technology. View a customer card that pops up for you as soon as the call is received. Understand who you are talking with and update important information about their situation in real time. Get a measure of the situation and come to easier resolutions while talking to the client. Smarter and more personal service helps you make a good impression on customers, leading to more successful sales.",
  },
  {
    id: 3,
    title: "Manage salespeople easily and efficiently anywhere",
    content:
      "SkyzCRM helps you manage your sales in real time: in the office, in the field, at home and abroad. Enable your salespeople to quickly retrieve data using their smartphones. Allow them to share data with any member of the organization, responding to any question, request or problem that comes up.",
  },
];

const SalesManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Sales management</h1>
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
              alt="Sales management with Skyz CRM"
              title="Sales-management_new"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesManagement;
