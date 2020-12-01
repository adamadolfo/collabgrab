import React, {useState} from "react"
import MainNav from "./MainNav"
import Footer from './Footer'
import ProjectCard from './ProjectCard'
import ProjectShow from './ProjectShow'
import { CardDeck, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { sendMessage, clickedProject } from '../actions/projectActions'




function ProjectBody(props) {
  
  let projects = useSelector(state => state.projects.projects)
  const skills = useSelector(state => state.skills.skillsArray)
  const project = useSelector(state => state.projects.clickedProject)
  let user = useSelector(state => state.user.user)

  let [input, setInput] = useState("")
  let [filterTrigger, setFilterTrigger] = useState(false)
  let [filtered, setFiltered] = useState([])
  let [clicked, setClicked] = useState(false)
  let [message, setMessage] = useState("")


  

  const onChange = (e) => {
    console.log(e.target.value)
    setInput(input = e.target.value)
      let x = projects.filter(project => {
      return project.required_skills.find(skill => {
        return skill.name == input
      })
    })
    setFilterTrigger(filterTrigger = true)
    setFiltered(filtered = x)
  
  }

  const handleProjectClick = (eventClickedProject) => {
    setClicked(!clicked)
    console.log(eventClickedProject)
    props.clickedProject(eventClickedProject)
  }

  const messageOnChange = (e) => {
    setMessage(message = e.target.value)
}

const sendMessage = (e) => {
  e.preventDefault()
  const obj = {
    message: message,
    project_id: project.id,
    user_id: user.id,
    name: user.name
  }
  props.sendMessage(obj)


}

         return (
           <div className="background" >
             <MainNav/>
            
             {!clicked ? 
             <Container>
               <Row>
                 <Col>
                 <div className="project-search">   
                    <select onChange={onChange}> 
                      {skills.map(skill => <option handleProjectClick={handleProjectClick} value={skill.name} > {skill.name} </option>)}
                    </select>
                  </div>
                <CardDeck>
                   {!filterTrigger ? 
                   projects.map(project => <ProjectCard handleProjectClick={handleProjectClick} project={project}/>) 
                   :
                   filtered.map(project => <ProjectCard handleProjectClick={handleProjectClick} project={project}/>)
                   }
                
                 </CardDeck>
   
                 </Col>
                </Row>
               </Container>
               :
                <ProjectShow project={project} sendMessage={sendMessage} messageOnChange={messageOnChange} />
               }
   
             <Footer />
                  
             
           </div>
         );

 }
    


    
    export default connect(null, { sendMessage, clickedProject })(ProjectBody)

   