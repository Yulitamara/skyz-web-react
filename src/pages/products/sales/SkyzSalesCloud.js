import img1 from "../../../assets/imgs/sales/Dell-cloud-sales2-600x395.png";

const paraData = [
  {
    id: 1,
    title: "Access the system from anywhere at any time",
    content:
      "SkyzCRM utilizes innovative cloud-based technology. Manage customer relationships perfectly from anywhere: home, office, abroad, a client’s offices or the field. Connect to the system and work in real time from any computer: stationary, mobile, tablet or smartphone.",
  },
  {
    id: 2,
    title: "Update work operations in real-time",
    content:
      "Accelerate many of your work processes with SkyzCRM. Dramatically improve access to information in various business situations such as: boosting office teamwork, accessing information from the field, retrieval of relevant files during meetings, getting regular updates from abroad and sales management from home.",
  },
  {
    id: 3,
    title: "Peace of mind with properly secured information",
    content:
      "Keep the sensitive information in your customer relationship management system under lock and key. Secure your data with top-grade virtual servers (3 layers of protection) with automatic data backups via SkyzCRM. No longer worry about securing individual information on company servers. Secure your information properly in the cloud like many of top Fortune 500 companies.",
  },
  {
    id: 4,
    title: "Embrace the SaaS model and save valuable purchases",
    content:
      "Save large IT purchasing costs for infrastructure and computing hardware and software. SkyzCRM incorporates a state-of-the-art SaaS (Software as a Service) model. Pay a low monthly fee, connect to the system and begin to fully manage and improve customer relationships. SkyzCRM in the cloud will operate and take care of infrastructure, security, information security, system stability, computing speed and software upgrades.",
  },
];

const SkyzSalesCloud = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Cloud sales</h1>
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

export default SkyzSalesCloud;
