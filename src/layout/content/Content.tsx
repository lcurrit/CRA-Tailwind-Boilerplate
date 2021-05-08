import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Contact } from '../../pages';
import './content.css';

function Content() {
  return (
    <div className="content">
      <div className="container mx-auto">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default Content;
