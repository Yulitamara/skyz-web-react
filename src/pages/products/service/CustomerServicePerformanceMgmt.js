import img1 from "../../../assets/imgs/service/service-performance-management-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Evaluate service call data in real time",
    content: "Analyze the number and quality of service calls on a monthly, quarterly and yearly basis. You can use Skyz Service to compare individual service staff from different geographic areas in real time. Compare time periods, types of calls and work habits of your technical staff to understand service level trends. Having such data available helps you optimize and streamline your service center.",
  },
  {
    id: 2,
    title: "Measure the duration of handling customer calls",
    content: "Do your employees approach customer care fast enough? Give yourself the ability to measure how long the service staff takes to handle customer calls. Get real-time feedback on the length of service calls, allowing you to save time on calls specific to personnel or type of event. Draw the necessary conclusions to make your service department more efficient.",
  },
  {
    id: 3,
    title: "Examine success rates and improve service quality",
    content: "Connect the right technical people that are successful on specific types of calls. Consider the success rate of each team member and gain insights into the quality of service at both the individual and team level. Skyz data will lead to conducting helpful work meetings with each technical person, analyzing issues with solid research, and help you improve performance.",
  },
];

const CustomerServicePerformanceMgmt = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Customer service performance management</h1>
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

export default CustomerServicePerformanceMgmt;
