import React, { Component } from "react"
import MainNav from "./MainNav"
import ProjectCard from './ProjectCard'
import { CardDeck, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/projectActions'
import PropTypes from "prop-types"



class ProjectBody extends Component {
  componentWillMount() {
    this.props.fetchProjects()
  }
 render() {
   
         return (
           <div>
             <MainNav/>

             <Container>
               <Row>
                 <Col>  
   
                <CardDeck>
                   {this.props.projects.map(project => <ProjectCard project={project}/>)}
                 </CardDeck>
   
                 </Col>
               </Row>
             </Container>
   
             
                  
             
           </div>
         );

 }
    }

  ProjectBody.propTypes = {
    fetchProjects: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired
  }

const mapStateToProps = state => ({
  projects: state.projects.projects
})
    
    export default connect(mapStateToProps, { fetchProjects })(ProjectBody);

   