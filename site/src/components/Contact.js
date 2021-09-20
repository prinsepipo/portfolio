import * as React from "react";


const Contact = () => {
  return (
    <div id="contact" className="c-contact">
      <h3 className="c-header">Get in touch</h3>
      <p className="contact-comment">Have a job offer? Want to collaborate? Send me a message.</p>

      <form className="contact-form">
        <input className="contact-name" type="text" placeholder="Name" />
        <input className="contact-email" type="email" placeholder="Email" />
        <input className="contact-subject" type="text" placeholder="Subject" />
        <textarea className="contact-message" placeholder="Message"></textarea>
        <span className="contact-send"><button type="button">Send</button></span>
      </form>
    </div>
  );
}


export default Contact;
