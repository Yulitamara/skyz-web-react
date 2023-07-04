import img1 from "../../../assets/imgs/sales/Apple-iMac-forecast-600x789.png";

const paraData = [
  {
    id: 1,
    title: "Calculate the potential for closing a deal",
    content: "Analyze the actual closure potential for a deal while making operational, marketing and cash flow adjustments. Using SkyzCRM gives you a high-resolution comprehensive picture of all the current deals and their prospects at every stage of the sales process. Break down the potential according to territory, to the type of products and to company size.",
  },
  {
    id: 2,
    title: "Analyze your deal against competing offers",
    content: "Present the alternatives to the customer so they can make a comparison of their options. Make a quick analysis with SkyzCRM and figure out your selling potential in real-time vs. the competition. Send the customer a competitive offer that will allow you to maximize the chances of closing the deal.",
  },
  {
    id: 3,
    title: "Think quickly about the probability of closing a deal",
    content: "Simplify and clarify all the internal and external variables that are in play during a deal. SkyzCRM helps you estimate the probability of completing the sale at any time, including during crucial meetings with the customer. Get the best tools to close the deal, but also understand when it’s time to cut and run.",
  },
];

const ForecastSales = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Forecast sales</h1>
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

export default ForecastSales;
