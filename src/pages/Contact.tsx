import React from 'react';
import { Header, ContactForm, SEO } from 'components';

function Contact() {
  return (
    <>
      <SEO pageTitle="Contact" />
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
