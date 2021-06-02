import React from 'react';
import { Header, Posts } from 'components';

function Home() {
  return (
    <>
      <Header
        backgroundUrl="https://placedog.net/600/200"
        headerMinHeight={150}
      >
        <h1>Home</h1>
      </Header>

      <div className="my-4">
        <Posts />
      </div>
    </>
  );
}

export default Home;
