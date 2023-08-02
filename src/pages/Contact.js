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

              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1659.6504026288226!2d34.8207817657051!3d32.093443031803936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a2b8bd9be3f%3A0x203d064f5c82e141!2sDavid%20Ben%20Gurion%20Rd%2024%2C%20Ramat%20Gan!5e0!3m2!1sen!2sil!4v1690962971490!5m2!1sen!2sil"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="google-map"
              ></iframe> */}
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
            <img src={contactImg} alt="contact" />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
