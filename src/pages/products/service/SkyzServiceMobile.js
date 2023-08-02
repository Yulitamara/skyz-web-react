import img1 from "../../../assets/imgs/service/skyz-service-mobile-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";

const paraData = [
  {
    id: 1,
    title: "Manage service processes from your smartphone",
    content: "Manage your entire customer service department in real time. Get a comprehensive snapshot of technician service calls and status through Skyz Service and your smartphone. Update your support staff with important information online and brainstorm if necessary.",
  },
  {
    id: 2,
    title: "Give the technical staff full access from the field",
    content: "Allow your organization’s service system to receive and manage service calls directly from the field. Turn your smartphone into an essential information tool that allows the on-the-ground technical team to receive professional tips and updates directly from Skyz Service. Your support staff will be able to complete essential operations such as creating orders, signing up customers and adding reminders for future calls. Save unnecessary delays and increase your level of customer service.",
  },
  {
    id: 3,
    title: "Extract any required technical data online while in the field",
    content: "With Skyz Service you can locate and access documents and files in real-time online. Connect to the SkyzCRM system with your smartphone, quickly search for the spec sheet in your client’s folder or project file and easily extract it. In addition, you can also print the document directly from the system using a wide range of printers.",
  },
];

const SkyzServiceMobile = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Mobile</h1>
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
              alt="Skyz Service mobile access"
              title="skyz-service-mobile"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default SkyzServiceMobile;
