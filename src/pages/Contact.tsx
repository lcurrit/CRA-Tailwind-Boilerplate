import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, ContactForm } from 'components';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Header>
        <h1>Contact</h1>
      </Header>
      <div className="my-4">
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
