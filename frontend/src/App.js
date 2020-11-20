import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {useSelector} from 'react-redux'

import Welcome from './components/Welcome'
import SkillBody from './components/SkillBody'
import ProjectBody from './components/ProjectBody'




function App() {
  const loggedIn = useSelector(state => state.loggedIn)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/skills" component={SkillBody}/>
        <Route exact path="/projects" component={ProjectBody}/>
      </Switch>
    </div>
  );
}

export default App;
