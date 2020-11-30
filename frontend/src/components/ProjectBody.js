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
    setInput(input = e.target.value)
    
  }
  

  const filterProjects = (e) => {
    e.preventDefault()
      let x = projects.filter(project => {
      return project.required_skills.find(skill => {
        return skill.name == input
      })
    })
    setFilterTrigger(filterTrigger = true)
    setFiltered(filtered = x)
    debugger
  }

         return (
           <div className="background" >
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

   