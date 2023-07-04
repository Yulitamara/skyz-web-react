import img1 from "../../../assets/imgs/service/Email-integration-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Automatically sync Outlook and Google Apps with Skyz",
    content: "Manage customer relationships in full sync with Outlook and Gmail. Easily sync messages, tasks, contacts and calendars saving valuable time on unnecessary data entry. Give yourself the ability to view messages and tasks related to customers from anywhere in the world.",
  },
  {
    id: 2,
    title: "Automatically connect email directly with the customer",
    content: "Easily send email messages directly to your customer’s account, service event or relevant project easily. Create user-friendly links according to your needs. Generate required announcements to customers, with the opportunity of finding similar messages in the advanced search engine. Get all the information you need in one advanced system.",
  },
  {
    id: 3,
    title: "Send service reminders directly from your system",
    content: "Send email notifications and reminders directly from Skyz, e.g. a large distribution email to customers in the case of a catastrophic event. You also can send reminders of service updates to customers according to selected chosen fields, and automatically send advance notices and updates to customers before a technician’s visit.",
  },
];

const EmailIntegrationService = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Email integration</h1>
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

export default EmailIntegrationService;
