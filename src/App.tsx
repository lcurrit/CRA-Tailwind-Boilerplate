import React from 'react';
import { SEO } from 'components';
import { Navigation, Content, Footer } from './layout';

function App() {
  return (
    <>
      <SEO />
      <div className="app">
        <Navigation />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
