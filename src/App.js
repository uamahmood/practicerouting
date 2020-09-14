import React from 'react';
import { Router } from '@reach/router';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import NumWord from './components/NumWord';
import ColorWord from './components/ColorWord';

function App() {
  return (
    <div className="App">
        <Router>
          <Home path="/home"/>
          {/* <Number path="/:id" />
          <Word path="/:a([A-Za-z]+)" /> */}
          <NumWord path="/:id" />
          <ColorWord path="/:id/:color1/:color2" />
      </Router>
    </div>
  );
}


export default App;
