import React from "react"
import { Card } from 'react-bootstrap'


function ProjectCard(props) {
      return (
        <div>
          <Card className='card'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><h4>{props.project.name}</h4></Card.Title>
              <Card.Text>
                <h6>Details:</h6> 
                <p>{props.project.details}</p>
                <h6>Required skills:</h6>
                {props.project.required_skills.map(required_skill => <p><strong> {required_skill.name} </strong></p>)}
              </Card.Text>
            </Card.Body>
            <Card.Footer className='card-footer'>
              <small className="footer-text">{props.project.location}</small>
            </Card.Footer>
          </Card>
        </div>
      );
    }
    
    export default ProjectCard