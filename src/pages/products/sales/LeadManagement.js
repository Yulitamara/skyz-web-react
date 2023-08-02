import img1 from "../../../assets/imgs/sales/Lead-management-1-600x747.png";
import SalesGetStarted from "../../../components/SalesGetStarted";

const paraData = [
  {
    id: 1,
    title: "Turn leads into potential sales",
    content:
      "Track leads from their inception to the qualifying stage until the close of the deal. Monitor the entire sales process while keeping an eye on additional opportunities that might exist. Get comprehensive information about each lead, where they came from and when they came into the system. Rate the best qualified leads and turn them into successful sales.",
  },
  {
    id: 2,
    title: "Manage and monitor your sales leads",
    content:
      "Make sure that the right leads get to the right sales people. When leads are entered into the SkyzCRM they will be automatically received by the right salesperson (whether they are working from home, in the field, or abroad). Monitor the entire process in real-time, checking that the leads are handled quickly and successfully.",
  },
  {
    id: 3,
    title: "Use smart filters to maximize quality leads",
    content:
      "Filter relevant inquiries using SkyzCRM’s lead management system. The filtering process allows you to cross-reference client data and existing sales history. Focus your sales team on following up on quality leads. Get valuable insights into your lead generation funnel to find the best lead sources for your team.",
  },
];

const LeadManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Lead management</h1>
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
              alt="Lead management with Skyz CRM"
              title="Lead-management"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default LeadManagement;
