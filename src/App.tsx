import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Configuration Demo</p>
        <a
          className="App-link"
          href="https://silversneakers.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SilverSneakers.com
        </a>
      </header>
    </div>
  );
}

export default App;
