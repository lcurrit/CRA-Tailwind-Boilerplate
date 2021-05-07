import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components';
import Title from '../components/Title';

function Home() {
  return (
    <>
      <Helmet>
        <title>The Best Movies Ever | Home</title>
      </Helmet>
      <Title title="Home" subtitle="it's where I keep my stuff." />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        consequuntur?
      </p>
      <Button>Hello There!</Button>
    </>
  );
}

export default Home;
