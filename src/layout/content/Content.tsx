import React from 'react';
import { Route } from 'react-router-dom';
import { Announcement } from '../../components';
import { Home, About, Contact } from '../../pages';
import './content.css';

function Content() {
  return (
    <>
      <Announcement>Put the latest emergency here!</Announcement>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </>
  );
}

export default Content;
