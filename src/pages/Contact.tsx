import React from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';

import Header from '../components/header/Header';

function Contact() {
  // https://dashboard.emailjs.com/admin/
  const serviceID = process.env.REACT_APP_serviceID!;
  const templateID = process.env.REACT_APP_templateID!;
  const userID = process.env.REACT_APP_userID!;

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Header>
        <h1>Contact</h1>
      </Header>
      <div className="my-4">
        <form action="" onSubmit={sendEmail} className="contact-form">
          <input type="hidden" name="contact_number" />
          <label htmlFor="user_name" className="block mb-2">
            Name <input type="text" name="user_name" id="user_name" />
          </label>

          <label htmlFor="user_email" className="block mb-2">
            Email <input type="email" name="user_email" id="user_email" />
          </label>

          <label htmlFor="message" className="block mb-2">
            Message <textarea name="message" id="message" />
          </label>

          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
}

export default Contact;
