import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Contact } from '../../pages';

function Content() {
  return (
    <div className="content">
      <div className="container m-auto">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default Content;
