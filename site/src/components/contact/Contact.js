import * as React from "react";

import ContentContainer from "../common/ContentContainer";
import ContentHeader from "../common/ContentHeader";

import "./Contact.css";


const Contact = () => {
  return (
    <ContentContainer id="contact" className="c-contact">
      <ContentHeader title="Get In Touch" />
      <p className="contact-comment">Have a job offer? Want to collaborate? Send me a message.</p>

      <form className="contact-form">
        <input className="contact-name" type="text" placeholder="Name" />
        <input className="contact-email" type="email" placeholder="Email" />
        <input className="contact-subject" type="text" placeholder="Subject" />
        <textarea className="contact-message" placeholder="Message"></textarea>
        <span className="contact-send"><button type="button">Send</button></span>
      </form>
    </ContentContainer>
  );
}


export default Contact;
