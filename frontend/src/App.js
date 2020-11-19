import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Welcome from './components/Welcome'



function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
