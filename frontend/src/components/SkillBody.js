import React, {useState} from "react"
import MainNav from "./MainNav"
import SkillCard from './SkillCard'
import { CardDeck, Container, Row, Col } from 'react-bootstrap'

import { useSelector } from 'react-redux'





function SkillBody (props) {
  const skills = useSelector(state => state.skills.skillsArray)
  // let user = useSelector(state => state.user.user)

  let [display, setDisplay] = useState(false)
  let [clickedSkill, setClickedSkill] = useState({})

  

  const handleClick = (e, skillName) => {
    let eventClicked = skills.find(skill => skill.name == skillName)
    setClickedSkill(clickedSkill = eventClicked)
    setDisplay(!display)
  }

 

         return (
           <div>
             <MainNav/>

             <Container>
               <Row>
                 <Col>  
   
                { !display ? <CardDeck>
                   {skills.map(skill => <SkillCard skill={skill} handleClick={handleClick}/>)}
                 </CardDeck> 
                 :
                 clickedSkill.users.map(user => <h1> {user.name} </h1>) }
   
                 </Col>
               </Row>
             </Container>
   
             
                  
             
           </div>
         );

    }

  
export default SkillBody