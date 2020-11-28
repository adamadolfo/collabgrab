import React, {useState} from "react"
import { Card } from 'react-bootstrap'


function SkillCard(props) {


      return (
        <div>
          
       
          
          <Card className='card' onClick={ (e) => props.handleClick(e, props.skill.name)} >
            <Card.Img variant="top" src={props.skill.img} />
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