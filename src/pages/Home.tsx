import React from 'react';
import { Button } from '../components';
import Title from '../components/Title';

function Home() {
  return (
    <>
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
