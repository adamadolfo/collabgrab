import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {useSelector} from 'react-redux'
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import Welcome from './components/Welcome'
import SkillBody from './components/SkillBody'
import ProjectBody from './components/ProjectBody'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Feed from './components/Feed'

import { fetchSkills } from './actions/skillActions'
import { fetchProjects } from './actions/projectActions'


function App(props) {
  useEffect(() => {
    props.fetchSkills()
    props.fetchProjects()
})
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/skills" component={SkillBody}/>
        <Route exact path="/projects" component={ProjectBody}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path='/feed' component={Feed} />
      </Switch>
    </div>
  );
}

// App.propTypes = {
//   fetchSkills: PropTypes.func.isRequired,
//   skills: PropTypes.array.isRequired
// }

// const mapStateToProps = state => ({
// skills: state.skills.skillsArray
// })
  
export default connect(null, { fetchSkills, fetchProjects })(App);