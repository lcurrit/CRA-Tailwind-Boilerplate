import React from 'react';
import { Button } from '../components';
import Title from '../components/Title';

function Home() {
  return (
    <>
      <Title title="Home" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        consequuntur?
      </p>
      <Button text="Hello there!" />
    </>
  );
}

export default Home;
