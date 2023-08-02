import { Link } from "react-router-dom";
import contactImg from "../assets/imgs/undraw_contact_us_re_4qqt.svg";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <div className="info">
          <h2>Let's get in touch</h2>
          <p>Availble Sunday-Thursday 9:00-17:00</p>
          <div className="info-details">
            <div className="detail">
              <Link to="https://goo.gl/maps/NBRVWoysWoAZbh8V9" className="pin-drop-icon">
                <span className="material-symbols-outlined contact-icon">
                  pin_drop
                </span>
              </Link>
              <p>Ben Gurion 24, Ramat Gan</p>
            </div>
            <div className="detail">
              <span className="material-symbols-outlined contact-icon">
                mail
              </span>
              <p>sales@impactsoft.co.il</p>
            </div>
            <div className="detail">
              <span className="material-symbols-outlined contact-icon">
                call
              </span>
              <p>03-6101800 / +972-6101800</p>
            </div>
          </div>
          <div className="info-img">
            <img src={contactImg} alt="contact img" />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
