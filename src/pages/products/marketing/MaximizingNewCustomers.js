import img1 from "../../../assets/imgs/sales/Maximizing-new-customers-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Analyze customer behavior",
    content: "Study the actions that have been taken with customers who are negotiating a sale. You can learn about the positive and negative aspects of their process through Skyz Marketing. Analyze their behavior, level of interest and customer history, identifying important details that may help maximize your sales.",
  },
  {
    id: 2,
    title: "Map customer potential according to predetermined characteristics and parameters",
    content: "Define the characteristics and variables that will help you correctly predict serious customers. Use Skyz’s smart filters to highlight important client characteristics. Compile your findings in a smart presentation format with data, charts and graphs for company review.",
  },
  {
    id: 3,
    title: "Improve your methods of targeting new customers",
    content: "Draw conclusions from an analysis of Skyz Marketing metrics, improving focus and maximizing new business. Choose the right marketing tools for each type of client, identify the length of the sales cycle, and determine the right sales people to send in to close the deal. Improve your marketing efficiency and maximize sales from your serious customers.",
  },
];

const MaximizingNewCustomers = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Maximizing new customers</h1>
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
              alt="Maximizing new customers with Skyz Marketing"
              title="Maximizing-new-customers"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MaximizingNewCustomers;
