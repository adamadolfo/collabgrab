import React, {useState, useEffect} from "react"
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { follow } from '../actions/userActions'

function UserCard(props) {
  let user = useSelector(state => state.user.user)

  const followEvent = (clickedUser) => {
    const followObj = {
      follower_id: user.id,
      followed_id: clickedUser.id
    }
    props.follow(followObj)
  }

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
                <strong>Skills:</strong>
                {props.user.skills.map(skill => <div> {skill.name}</div>)}
                <strong style={{marginTop: "10px"}}>Karma:</strong> {props.user.karma ? props.user.karma : 0}
                <button onClick={() => followEvent(props.user)} style={{float: "right", backgroundColor: "#001f2e", color: "white", borderRadius: "5px", padding: "7px"}}>Follow</button>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='card-footer'>
      <small className="footer-text">{props.user.location}</small>
            </Card.Footer>
          </Card>
        
        </div>
      );
    }
    
    export default connect(null, { follow })(UserCard) 