import React, {useState} from "react"
import MainNav from "./MainNav"
import Footer from './Footer'
import ProjectCard from './ProjectCard'
import { CardDeck, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'


// i need to make a search bar that looks for a skill and looks through the projects required skills array for the same skill


function ProjectBody() {
  
  let projects = useSelector(state => state.projects.projects)
  const skills = useSelector(state => state.skills.skillsArray)
  const skillNames = skills.map(skill => skill.name)
  

  let [input, setInput] = useState("")
  let [filterTrigger, setFilterTrigger] = useState(false)
  let [filtered, setFiltered] = useState([])



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

         return (
           <div className="background" >
             <MainNav/>

             <Container>
               <Row>
                 <Col>
                 <div className="project-search"> 
                

                   
                  <select onChange={onChange}> 
                    {skills.map(skill => <option value={skill.name} > {skill.name} </option>)}
                  </select>
                   
                  </div>
                <CardDeck>
                   {!filterTrigger ? 
                   projects.map(project => <ProjectCard project={project}/>) 
                   :
                   filtered.map(project => <ProjectCard project={project}/>)
                   }
                
                 </CardDeck>
   
                 </Col>
               </Row>
             </Container>
   
             <Footer />
                  
             
           </div>
         );

 }
    


    
    export default ProjectBody

   