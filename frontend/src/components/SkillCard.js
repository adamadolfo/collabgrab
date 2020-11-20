import React from "react"
import { Card } from 'react-bootstrap'


function SkillCard(props) {
      return (
        <div>
          <Card className='card'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{props.skill.name}</Card.Title>
      <Card.Text>
      {props.name}
      </Card.Text>
    </Card.Body>
    <Card.Footer className='card-footer'>
      <small className="footer-text">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
 
        </div>
      );
    }
    
    export default SkillCard