import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {useSelector} from 'react-redux'

import Welcome from './components/Welcome'
import SkillBody from './components/SkillBody'
import ProjectBody from './components/ProjectBody'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Dashboard from './components/Dashboard'




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/skills" component={SkillBody}/>
        <Route exact path="/projects" component={ProjectBody}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
