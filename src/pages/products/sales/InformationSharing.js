import img1 from "../../../assets/imgs/sales/Information-sharing3-1-600x395.png";

const paraData = [
  {
    id: 1,
    title: "Work together on leads and opportunities to pinpoint the important deals",
    content: "Improve your sales teamwork with SkyzCRM. With improved communications, work together and make joint decisions at every stage of the sales process. Managers can jump in and be involved in critical points of the salespeople’s actions. Get feedback, relevant information or an important tip from the rest of the team and help close the deal.",
  },
  {
    id: 2,
    title: "Find the information you need in real time",
    content: "Extract essential information that affects your sale on the go by connecting quickly to the SkyzCRM system rather than spending hours on clumsy search. Rely on accurate and up-to-date information from a vast repository, available to you anywhere 24/7.",
  },
  {
    id: 3,
    title: "Share information and files from any device anywhere, anytime",
    content: "Update important information online with SkyzCRM from anywhere. Share vital information with team members and advice at every stage of the sales process from the stage of lead acquisition, through opportunity creation to the actual transactions. Make decisions and profit from team collaboration even when you are in the field.",
  },
];

const InformationSharing = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Information sharing</h1>
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

export default InformationSharing;
