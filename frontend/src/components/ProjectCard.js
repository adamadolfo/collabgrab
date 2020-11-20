import React from "react"
import { Card } from 'react-bootstrap'


function ProjectCard(props) {
      return (
        <div>
          <Card className='card'>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{props.project.name}</Card.Title>
              <Card.Text>
              {props.project.details}
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