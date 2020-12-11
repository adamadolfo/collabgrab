import React, {useState} from "react"
import MainNav from "./MainNav"
import Footer from './Footer'
import SkillCard from './SkillCard'
import UserCard from './UserCard'
import { CardDeck, Container, Row, Col } from 'react-bootstrap'

import { useSelector } from 'react-redux'





function SkillBody (props) {
  const skills = useSelector(state => state.skills.skillsArray)
  // let user = useSelector(state => state.user.user)

  let [display, setDisplay] = useState(false)
  let [clickedSkill, setClickedSkill] = useState({})

  

  const handleSkillClick = (e, skillName) => {
    let eventClicked = skills.find(skill => skill.name == skillName)
    setClickedSkill(clickedSkill = eventClicked)
    setDisplay(!display)
  }

 

         return (
           <div className="background">
             <MainNav/>

             <Container>
               <Row>
                 <Col>  
   
                { !display ? <CardDeck>
                   {skills.map(skill => <SkillCard skill={skill} handleSkillClick={handleSkillClick}/>)}
                 </CardDeck> 
                 :
                 <CardDeck>
                   {console.log(clickedSkill)}
                    {clickedSkill.users.map(user => <UserCard user={user} />)}
                 </CardDeck >
                  }
   
                 </Col>
               </Row>
             </Container >
   
             <Footer />
                  
             
           </div>
         );

    }

  
export default SkillBody