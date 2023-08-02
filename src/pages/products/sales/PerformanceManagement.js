import img1 from "../../../assets/imgs/sales/Dell-performance-management2-600x780.png";

const paraData = [
  {
    id: 1,
    title: "Drive your sales people through goal management",
    content: "SkyzCRM helps you motivate your salespeople and improve their results. Set goals at the individual, departmental, and organizational levels. Measure sales performance monthly, quarterly and annually based on variables such as the number of transactions, cumulative revenue, profitability and contract value. Analyze individual goals versus real-time performance. Integrate incentives for achievements according to set targets.",
  },
  {
    id: 2,
    title: "Measure performance quickly and save valuable time",
    content: "SkyzCRM lets you evaluate sales performance efficiently and quickly. Allow each salesperson to connect to the system and examine their standing compared to set goals. Get a snapshot of your sales performance at an individual, departmental, and organizational level. Avoid cumbersome calculations and save valuable time.",
  },
  {
    id: 3,
    title: "Pinpoint real-time failures and improve performance",
    content: "SkyzCRM will point out sales performance weaknesses. Get real-time feedback on failure to meet targets, deviation from the set sales plan and unexplained delays. Presented failures at the personal, departmental and organizational levels. Draw necessary conclusions that give valuable feedback to your sales people. Improve sales processes to get back on track to achieve your goals.",
  },
];
const PerformanceManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Performance management</h1>
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
              alt="Performance management with Skyz Sales"
              title="Dell-performance-management2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceManagement;
