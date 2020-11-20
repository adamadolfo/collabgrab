import React, { Component } from "react"
import MainNav from "./MainNav"
import SkillCard from './SkillCard'
import { CardDeck, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchSkills } from '../actions/skillActions'
import PropTypes from "prop-types"



class SkillBody extends Component {
  componentWillMount() {
    this.props.fetchSkills()
  }
 render() {
   
         return (
           <div>
             <MainNav/>

             <Container>
               <Row>
                 <Col>  
   
                <CardDeck>
                   {this.props.skills.map(skill => <SkillCard skill={skill} />)}
                 </CardDeck>
   
                 </Col>
               </Row>
             </Container>
   
             
                  
             
           </div>
         );

 }
    }

  SkillBody.propTypes = {
    fetchSkills: PropTypes.func.isRequired,
    skills: PropTypes.array.isRequired
  }

const mapStateToProps = state => ({
  skills: state.skills.skillsArray
})
    
    export default connect(mapStateToProps, { fetchSkills })(SkillBody);