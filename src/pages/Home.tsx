import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header/Header';

function Home() {
  return (
    <>
      <Helmet>
        <title>The Best Movies Ever | Home</title>
      </Helmet>
      <Header>Home</Header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        consequuntur?
      </p>
    </>
  );
}

export default Home;
