import React from 'react';
import { Route } from 'react-router-dom';
import { Announcement } from 'components';
import { Home, About, Contact } from 'pages';
import './content.css';

function Content() {
  return (
    <>
      <Route exact path="/">
        <Announcement>Site still under maintenance.</Announcement>
      </Route>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </>
  );
}

export default Content;
