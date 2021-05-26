import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './contactform.css';

function ContactForm() {
  const [sent, setSent] = useState(false);

  // https://dashboard.emailjs.com/admin/
  const serviceID = process.env.REACT_APP_serviceID!;
  const templateID = process.env.REACT_APP_templateID!;
  const userID = process.env.REACT_APP_userID!;

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      () => {
        setSent(true);
      },
      () => {
        setSent(false);
      }
    );
  };

  return (
    <>
      {sent && <p>Message successfully sent</p>}
      {!sent && (
        <form onSubmit={sendEmail} className="contact-form">
          <input type="hidden" name="contact_number" />
          <label htmlFor="user_name">
            Name <input type="text" name="user_name" id="user_name" />
          </label>

          <label htmlFor="user_email">
            Email <input type="email" name="user_email" id="user_email" />
          </label>

          <label htmlFor="message">
            Message <textarea name="message" id="message" />
          </label>

          <input className="btn" type="submit" value="Send" />
        </form>
      )}
    </>
  );
}

export default ContactForm;
