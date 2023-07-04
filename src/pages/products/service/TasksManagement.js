import img1 from "../../../assets/imgs/service/tasks-mgmt-600x747.png";

const paraData = [
  {
    id: 1,
    title: "Monitor call center tasks from any location",
    content: "Give yourself and the service team the ability to set up online tasks and projects in both the office and the field. Manage these assignments and their derivatives smartly and efficiently with Skyz Service. Create alerts and reminders if necessary, reducing delays and meeting your deadlines.",
  },
  {
    id: 2,
    title: "Adjust the structure of the task process to your requirements",
    content: "Does an assignment require a specific work process? Create a proper task structure with Skyz Service for your project type and organizational needs. Get great flexibility in making any adjustments from any location in real time. Allow service personnel to perform their tasks quickly and effectively.",
  },
  {
    id: 3,
    title: "Assign tasks to relevant events",
    content: "Have you created a number of tasks for the service team due to a complex event? Assign and monitor all these tasks easily with Skyz Service. Get an overall view of the progress of the event and the performance of each of your service personnel. Allow yourself and personnel in the field to make changes and adjustments to the task processes, collaborating online.",
  },
];

const TasksManagement = () => {
  return (
    <>
      <div className="product-page-container">
        <div className="product-section-container">
          <div className="right">
            <h1>Tasks management</h1>
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

export default TasksManagement;
