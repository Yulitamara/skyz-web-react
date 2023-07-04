import img1 from "../../../assets/imgs/sales/mobile-access_new-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Manage the sales process in the field",
    content: "Out of the office? You can continue to manage your sales and help your customers with SkyzCRM. Follow and assign tasks on the go with your smartphone, just like you would in the office. Get full access to marketing information with customers from anywhere–fast. Update summaries of meetings during or immediately upon completion of the session and avoid missing important details for follow up.",
  },
  {
    id: 2,
    title: "Don’t rely on memory–get an up-to-date snapshot of your appointments and meetings",
    content: "SkyzCRM helps you organize and review your schedule at a glance. Stay updated online, during meetings or meetings with the customer, with critical changes that were updated just minutes ago by the staff at the office. Get important tips during sales, using your smartphone, to help close the deal.",
  },
  {
    id: 3,
    title: "Extract any required file online from anywhere you have reception",
    content: "Give yourself the ability to locate and retrieve documents and files in real time anywhere. Connect to the SkyzCRM system using your smartphone, quickly search any document in the client folder and easily retrieve it. In addition, you can print documents directly from the network using a wide range of printers.",
  },
];

const SkyzSalesMobile = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Mobile access</h1>
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

export default SkyzSalesMobile;
