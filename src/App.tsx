import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import { Navigation, Footer } from './layout';
import { About, Contact, Home } from './pages';

function App() {
  return (
    <div className="application">
      <Helmet>
        <style type="text/css">{`
        body {
            background-color: blue;
        }

        p {
            font-size: 12px;
        }
      `}</style>
      </Helmet>
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
