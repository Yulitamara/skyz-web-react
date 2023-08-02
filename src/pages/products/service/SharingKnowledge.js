import img1 from "../../../assets/imgs/service/Sharing-knowledge-600x747.png";
import ServiceGetStarted from "../../../components/ServiceGetStarted";

const paraData = [
  {
    id: 1,
    title: "Create a base of your professional service tips online",
    content: "Update professional information in real-time on Skyz Service. Contribute important tips from your experience (including staff, service managers and former employees) to the service department’s knowledge base. Ensure that the correct answers are accessible to each member of the team. Give the technical staff access to professional, essential and updated knowledge from anywhere in real time.",
  },
  {
    id: 2,
    title: "Quickly find information on service issues that have been resolved",
    content: "Give yourself the ability to accumulate information about customer service events. Add a wide variety of service issues to Skyz Service, making it a vital information repository for your organization. Give your support team real-time access to vital historical client information. Quickly retrieve cumulative knowledge about customer cases that cannot be found in any other source.",
  },
  {
    id: 3,
    title: "Help your customers help themselves and shorten your time",
    content: "Build a public repository of service FAQs and easy fixes for your customers. Deepen the public knowledge base through Skyz Service and organize it in an FAQ format. Allow customers to resolve issues without technical assistance from the service team. Help your customers help themselves and take some of the load off of your service technicians and support staff.",
  },
];

const SharingKnowledge = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Sharing knowledge</h1>
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
              alt="Sharing knowledge with Skyz Service"
              title="Sharing-knowledge"
            />
          </div>
        </div>
        <ServiceGetStarted />
      </div>
    </>
  );
};

export default SharingKnowledge;
