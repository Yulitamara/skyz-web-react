import contactImg from "../assets/imgs/undraw_contact_us_re_4qqt.svg";

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <div className="info">
          <h2>Let's get in touch</h2>
          <p>Availble Sunday-Thursday 9:00-17:00</p>
          <div className="info-details">
            <div className="detail">
              <span className="material-symbols-outlined contact-icon">
                pin_drop
              </span>
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
              <p>03-6101800</p>
            </div>
          </div>
          <div className="info-img">
            <img src={contactImg} alt="contact" />
          </div>
        </div>
        <form autocomplete="off" className="form">
          <h2>Contact us</h2>
          <div className="fields">
            <div className="field-container">
              <div className="label-container">
                <span className="material-symbols-outlined label-icon">
                  person
                </span>
              </div>
              <div className="input-container">
                <input type="text" className="input" placeholder="Full Name" />
              </div>
            </div>
            <div className="field-container">
              <div className="label-container">
                <span className="material-symbols-outlined label-icon">
                  mail
                </span>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="input"
                  placeholder="Email / username"
                />
              </div>
            </div>
            <div className="field-container">
              <div className="label-container">
                <span className="material-symbols-outlined label-icon">
                  call
                </span>
              </div>
              <div className="input-container">
                <input
                  type="number"
                  className="input"
                  placeholder="Phone"
                  id="contactFormPhone"
                />
              </div>
            </div>
            <div className="field-container">
              <div className="label-container">
                <span className="material-symbols-outlined label-icon">
                  corporate_fare
                </span>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="input"
                  placeholder="Organization"
                />
              </div>
            </div>
            <div className="textarea">
              <label className="title">Message:</label>
              <textarea name="message" className="input"></textarea>
            </div>
          </div>
          <input type="submit" value="Send" className="btn btn-secondary" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
