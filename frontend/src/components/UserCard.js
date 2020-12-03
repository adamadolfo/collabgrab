import React from "react"
import { Card } from 'react-bootstrap'


function UserCard(props) {


      return (
        <div>
          
       
          
          <Card className='card' >
            <Card.Img style={{height: "200px"}} variant="top" src={props.user.img} />
            <Card.Body>
              <Card.Title>{props.user.name}</Card.Title>
              <Card.Text>
                {props.user.bio}
                <br />
                <br />
                {/* Skills:
                {props.user.skills ? props.user.skills.map(skill => <p> {skill.name}</p>) : <p>This is a test account.</p>} */}
                Karma: {props.user.karma ? props.user.karma : <p>Test accounts don't have karma.</p>}
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