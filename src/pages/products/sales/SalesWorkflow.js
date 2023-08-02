import img1 from "../../../assets/imgs/sales/Workflow_new-600x559.png";
import SalesGetStarted from "../../../components/SalesGetStarted";

const paraData = [
  {
    id: 1,
    title: "Perform advanced and efficient teleconferencing sessions",
    content: "Manage your Call Center system with maximum efficiency with SkyzCRM. Enjoy professional telecon meetings tailored to your company needs. Record appointments directly in the selected salesperson’s calendar including automatic reminders. Conduct meetings in full coordination with all participants without any location restrictions. Optimize meeting times easily and efficiently.",
  },
  {
    id: 2,
    title: "Synchronize meetings with maximum flexibility",
    content: "SkyzCRM allows you to manage appointments in an advanced and innovative way. Coordinate team meetings quickly and efficiently by sharing calendars in real time. Synchronize your meetings with maximum flexibility using Outlook or any other email system.",
  },
  {
    id: 3,
    title: "Update salespeople with important information for their meetings",
    content: "Have you ever received an important file at the last minute when your salesperson had already left for the customer? Update them instantly with your smartphone! Upload the file to SkyzCRM’s customer card with a quick message and your salesperson is already in the know, alerted and ready to meet. Continue to support them in real time during the meeting as well – having up to date information can definitely lead to closing that deal!",
  },
];

const SalesWorkflow = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Workflow</h1>
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
              alt="workflow with Skyz Sales"
              title="Workflow_new"
            />
          </div>
        </div>
        <SalesGetStarted />
      </div>
    </>
  );
};

export default SalesWorkflow;
