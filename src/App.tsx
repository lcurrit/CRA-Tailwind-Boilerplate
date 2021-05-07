import React from 'react';
import { Route } from 'react-router-dom';
import { Navigation, Footer } from './layout';
import { About, Contact, Home } from './pages';

function App() {
  return (
    <div className="application">
      <Navigation />
      <div className="container m-auto">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
