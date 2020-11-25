import React, { Component } from "react"
import MainNav from "./MainNav"
import SkillCard from './SkillCard'
import { CardDeck, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import PropTypes from "prop-types"



class SkillBody extends Component {

 render() {
   
         return (
           <div>
             <MainNav/>

             <Container>
               <Row>
                 <Col>  
   
                <CardDeck>
                   {/* {this.props.skills.map(skill => <SkillCard skill={skill} />)} */}
                 </CardDeck>
   
                 </Col>
               </Row>
             </Container>
   
             
                  
             
           </div>
         );

 }
    }

  
export default SkillBody