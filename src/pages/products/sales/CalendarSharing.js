import img1 from "../../../assets/imgs/sales/calendar-sharing-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Automatically synchronize Outlook with SkyzCRM",
    content:
      "Managing customer relationships in full synchronization with Outlook just got easier with SkyzCRM. Sync Outlook messages, tasks, contacts, and calendars and save valuable time on unnecessary data entry. Give yourself the ability to view messages and tasks related to customers from anywhere in the world.",
  },
  {
    id: 2,
    title: "Sort your emails by project or by customer",
    content:
      "SkyzCRM helps you keep track of your emails, linking them to the right tasks or projects with ease. Use the advanced search function to review customer email history in real time from anywhere.",
  },
  {
    id: 3,
    title: "Send marketing and sales pitches directly from your email system",
    content:
      "Send mass emails directly from SkyzCRM. Deliver your message to selected target audiences or potential customers according to the filters you have chosen. Design your email templates in an advanced and flexible way. Automatically track the mailing to determine your results.",
  },
];

const CalendarSharing = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Calendar sharing</h1>
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

export default CalendarSharing;
