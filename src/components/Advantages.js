import { useTranslation } from "react-i18next";

const Advantages = () => {
  const { t } = useTranslation();
  return (
    <section className="advantages">
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">cloud</span>
        </div>
        <h2 className="header">Cloud technology</h2>
        <p>
          Move to an innovative cloud-based system. Enable employees to work
          from anywhere, on any device, in real time.
        </p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">sync</span>
        </div>
        <h2 className="header">360-degree customer view</h2>
        <p>
          Get a comprehensive view of your customers in one glance: current
          status, history, processes, inquiries, opportunities, calls, and
          deals.
        </p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">devices</span>
        </div>
        <h2 className="header">Work from anywhere</h2>
        <p>
          View critical information, drive action, and work with customers
          effectively from the office, the field, the road, home, or abroad.
        </p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">watch</span>
        </div>
        <h2 className="header">Real-time management</h2>
        <p>
          Manage processes, tasks, supervision, and control online from anywhere
          with immediate access to information. Every minute is worth a lot of
          money.
        </p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">view_array</span>
        </div>
        <h2 className="header">User-friendly display</h2>
        <p>
          Give yourself a convenient and optimal view of information, data,
          reports, and dashboards on any device, anywhere, at the touch of a
          button.
        </p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">wifi_tethering</span>
        </div>
        <h2 className="header">Instant system access</h2>
        <p>
          Connect to Skyz CRM using the SaaS model and start working tomorrow
          morning. Save yourself the expense of expensive purchases and the
          hassle of data security.
        </p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">highlight</span>
        </div>
        <h2 className="header">Innovative approach</h2>
        <p>
          Upgrade your organization through an innovative management system. Get
          answers to every need in the modern era in terms of work, technology,
          marketing, service, and collaboration.
        </p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">phone_iphone</span>
        </div>
        <h2 className="header">Full mobile compatibility</h2>
        <p>
          Full mobile compatibility Allow yourself to manage customer
          relationships from mobile devices just like from the office. Take
          advantage of field work capabilities and increase productivity.
        </p>
      </div>
      <div className="advantage">
        <div className="icon-container">
          <span className="material-symbols-outlined">equalizer</span>
        </div>
        <h2 className="header">High ROI</h2>
        <p>
          Dramatically improve work processes. Increase revenue and
          significantly improve the bottom line on a monthly, quarterly, and
          annual basis.
        </p>
      </div>
    </section>
  );
};

export default Advantages;
