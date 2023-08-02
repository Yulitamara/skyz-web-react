import img1 from "../../../assets/imgs/service/Skyz-Service-Cloud_new-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Support customers from anywhere at any time",
    content: "Skyz Service exists in the cloud. Fully support customers from anywhere: from home, from the office, from abroad, from the customer’s offices and from the field. Connect to the system and view the customer status in real time from any computer: desktop, laptop, tablet and smartphone.",
  },
  {
    id: 2,
    title: "Trade in your sluggish system for fast processing",
    content: "Accelerate customer service processes through Skyz Service in the cloud. Dramatically improve the response to service calls from anywhere online and shorten the waiting times. Allow the technical staff immediate access to essential information for service calls in faraway locations.",
  },
  {
    id: 3,
    title: "Get peace of mind with properly secured information",
    content: "Keep sensitive customer account information secure. Skyz safeguards your data with top-level virtual servers (3 layers of protection) including automatic online backups. No more taking personal responsibility for securing individual information on company servers. Let professionals secure your information in the cloud and get peace of mind.",
  },
  {
    id: 4,
    title: "Work with the SaaS model and save on infrastructure",
    content: "Save large purchasing costs on infrastructure and computing hardware and software. Go to Skyz’s SaaS (Software as a Service) model. Pay a low monthly fee, connect to the system and begin to fully manage your customer service. The system will operate on its own without you worrying about infrastructure, insurance, information security, system stability, speed of work and software upgrades. All you have to do is manage your team and aim for customer satisfaction.",
  },
];

const SkyzServiceCloud = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Cloud technology</h1>
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
              alt="Skyz Service cloud technology"
              title="Skyz-Service-Cloud_new"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkyzServiceCloud;
