import img1 from "../../../assets/imgs/service/share-calanders-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Share appointment calendars, service call info and service team meetings",
    content: "View, share, and connect calls, appointments and service meetings with Skyz Service from anywhere. Get an up-to-date profile of all the calls and events on a daily, weekly, and monthly basis. Make the calendar a central tool that is linked to all service processes and make changes in real time.",
  },
  {
    id: 2,
    title: "Syncs fully with Outlook and Gmail",
    content: "Synchronize calls and service meetings set up in Outlook and Gmail to Skyz Service and vice versa, easily and quickly. Link the information from these popular email programs to the client’s files in the CRM system. Manage customer service processes and consolidate all the information in one place, allowing access from anywhere and at any time.",
  },
  {
    id: 3,
    title: "Save time with automatic appointment scheduling",
    content: "Want to organize a multi-participant meeting or an emergency service meeting? Make it happen with Skyz Service’s calendar management system. View all relevant schedules in real time, find the optimal time to slot in the meeting and send a meeting call at the touch of a button. An automatic confirmation will be sent after updating the invitees online.",
  },
];

const ShareCalendars = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Share calendars</h1>
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

export default ShareCalendars;
