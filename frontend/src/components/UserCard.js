import React from "react"
import { Card } from 'react-bootstrap'


function UserCard(props) {


      return (
        <div>
          
       
          
          <Card className='card' >
            <Card.Img variant="top" src={props.user.img} />
            <Card.Body>
              <Card.Title>{props.user.name}</Card.Title>
              <Card.Text>
                {props.user.bio}
                Skills:
                {console.log(props.user)}
                {/* {props.user.skills.map(skill => <p> {skill.name}</p>)} */}
              </Card.Text>
            </Card.Body>
            <Card.Footer className='card-footer'>
      <small className="footer-text">{props.user.location}</small>
            </Card.Footer>
          </Card>
  
 
        
        </div>
      );
    }
    
    export default UserCard 