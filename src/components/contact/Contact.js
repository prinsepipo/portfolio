import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ContentContainer from "../common/ContentContainer";
import ContentHeader from "../common/ContentHeader";

import "./Contact.css";


const handleSubmit = (e) => {};


const Contact = () => {
  return (
    <ContentContainer id="contact" className="c-contact">
      <ContentHeader title="Get In Touch" />
      <p className="contact-comment">Got an opportunity? Want to collaborate? Send me a message.</p>

      <ul class="contact-list">
        <li className="contact-item contact-email">
          <a href="mailto:prinsepipo.sanchez@gmail.com" title="prinsepipo.sanchez@gmail.com">
            <span class="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
            <span>prinsepipo.sanchez@gmail.com</span>
          </a>
        </li>
        <li className="contact-item contact-linkedin">
          <a href="https://www.linkedin.com/in/josaphat-lumapas-350640180/" title="https://www.linkedin.com/in/josaphat-lumapas-350640180/" target="_blank">
            <span class="contact-icon"><FontAwesomeIcon icon={faLinkedin} /></span>
            <span>LinkedIn Profile</span>
          </a>
        </li>
      </ul>
    </ContentContainer>
  );
}


export default Contact;
