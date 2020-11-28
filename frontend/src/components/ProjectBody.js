import React, {useState} from "react"
import MainNav from "./MainNav"
import ProjectCard from './ProjectCard'
import { CardDeck, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'



// need to add to schema, Project has many requiredSkills 
// i need to make a search bar that looks for a skill and looks through the projects required skills array for the same skill


function ProjectBody() {
  
  let projects = useSelector(state => state.projects.projects)
  const skills = useSelector(state => state.skills.skillsArray)
  const skillNames = skills.map(skill => skill.name)
  

  let [input, setInput] = useState("")
  


  const onChange = (e) => {
    setInput(input = e.target.value)
    
  }

  const filterProjects = (e) => {
    e.preventDefault()
    console.log("submit")
    // need to filter through projects for each project's required_skills then see if the input in state is == the name
      debugger
  
    
    console.log(projects)
  }

         return (
           <div>
             <MainNav/>

             <Container>
               <Row>
                 <Col>
             
                 <div className="project-search"> 
                 <form onSubmit={filterProjects}>
                   
                  <input
                    onChange={(e) => onChange(e)}
                    className='input-area' 
                    type="text" 
                    name="search" 
                    placeholder=" Search.." 
                    />
                   </form> 
                   <i class="fas fa-search"  ></i>
                  </div>
                <CardDeck>
                   {projects.map(project => <ProjectCard project={project}/>)}
                 </CardDeck>
   
                 </Col>
               </Row>
             </Container>
   
             
                  
             
           </div>
         );

 }
    


    
    export default ProjectBody

   