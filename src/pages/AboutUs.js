import "../assets/scss/_about-us.scss";
import "../assets/scss/base.scss";
import officeImg from "../assets/imgs/undraw_in_the_office_re_jtgc.svg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="text">
        <p>
          SkyzCRM is an innovative customer relationship management platform
          developed to offer a smart and efficient solution for businesses,
          companies and organizations. The idea behind SkyzCRM is to provide you
          and your team advanced tools for managing customer sales, service and
          marketing at a glance, in real time, from any place and from any
          device.
          <br />
          <br />
          Skyz is owned by: IMPACT SOFTWARE SYSTEMS (1996) LTD
        </p>
        <br />
        <br />
        <h3>
          SkyzCRM was created so anyone can manage customer relationships easily
          and efficiently!
        </h3>
        <br />
        <p>
          Do you run a small business? Are you a senior executive in a
          medium-sized company? Even if you are a decision maker in a large
          organization, you can begin to manage your firm’s CRM as early as
          tomorrow morning with our platform. There is no need to build out the
          infrastructure. Just log in and manage your customers efficiently!
        </p>
        <br />
        <br />
        <h3>
          A cloud-based, mobile-optimized platform that takes advantage of
          social media opportunities
        </h3>
        <br />
        <p>
          SkyzCRM has been built as a cloud-based platform, fully adapting to
          all types of screens and with mobile technology and social media in
          mind. The system was built for today’s companies that need to upgrade
          their CRM because of a more mobile workforce and the reliance on
          social media applications by both your employees and customers.
        </p>
        <br />
        <br />
        <h3>
          We focus on giving our clients the complete picture, in real time and
          from any location
        </h3>
        <br />
        <p>
          SkyzCRM has been created to maximize company efficiency and
          capability. The system’s intuitive design allows the viewing of
          important client information and management processes at one glance,
          in real time. Managers can now access all necessary information
          online, update data, monitor processes and deal with customers from
          the office, the field, at home or abroad.
        </p>
        <br />
        <br />
        <h3>Technological developments and updates all the time</h3>
        <br />
        <p>
          SkyzCRM R&D team is constantly developing and advancing our technology
          platform. We want our clients to be up-to-date with trends,
          innovations and changes in the macro level as well as at the micro
          level. From our customers point of view, they will always be working
          with the most up-to-date system at any point in time.
        </p>
      </div>
      <img src={officeImg} alt="office-img" />
    </div>
  );
};

export default AboutUs;
