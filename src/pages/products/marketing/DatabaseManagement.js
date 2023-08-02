import img1 from "../../../assets/imgs/sales/database-management-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Import data faster and easier",
    content: "Want to import critical data from external sources? Import it quickly using Skyz Marketing. Allow yourself maximum flexibility in managing the various data fields to analyze a marketing campaign. Develop successful marketing strategies using high quality data and analysis.",
  },
  {
    id: 2,
    title: "Improve and optimize your data",
    content: "Improve the quality of marketing data through optimization. Merge and eliminate duplicated data using Skyz Marketing. These automated processes will improve the quality of your marketing measurement and save hours of monotonous work.",
  },
  {
    id: 3,
    title: "Generate new customers",
    content: "Now that the data has been imported and the quality upgraded, manage it successfully using Skyz MARKETING. Analyze the data to generate leads, opportunities and sales using a sophisticated tracking mechanism. Add new customers and increase your revenue!",
  },
];

const DatabaseManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Database Management</h1>
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
              alt="Database management with Skyz CRM"
              title="database-management"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatabaseManagement;
