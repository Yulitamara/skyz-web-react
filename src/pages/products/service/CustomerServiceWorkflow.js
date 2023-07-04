import img1 from "../../../assets/imgs/";

const paraData = [
  {
    id: 1,
    title: "",
    content: "",
  },
  {
    id: 2,
    title: "",
    content: "",
  },
  {
    id: 3,
    title: "",
    content: "",
  },
];

const CustomerServiceWorkflow = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Contact management</h1>
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

export default CustomerServiceWorkflow;
