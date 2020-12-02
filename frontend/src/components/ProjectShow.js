import React, {useState} from "react"

import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'





function ProjectShow(props) {




 



 

    return(

        <Container>
            <Row >
                <Col className="project-show" >
                    <h1>{props.project.name}</h1>
                    <h5> {props.project.location} </h5>
                    <br />
                    <h3>{props.project.details}</h3>
                    <br />
                    <br />
                    {/* <h3> Project Collaborators: </h3>
                    {props.project.users.count != 0 ? props.project.users.map(user => <div className="custom-card"> {user.name} </div>) : null} */}
                </Col>
            </Row>
            <Row>
                <Col className='chat-container' >
                    <h1 style={{textAlign: "center"}}>Chat</h1>
                        <div className="scroll-bar"  >
                        {Object.keys(props.project).length !== 0 ? props.project.posts.map(post => <div className='chat-bubble' >{post.name}: {post.message}</div>) : null}
                        </div>
                    <form onSubmit={(e) => props.sendMessage(e)}>
                        <label for="post">Message:</label>
                        <br />
                        <textarea className="text-box" onChange={(e) => props.messageOnChange(e)}type="text" id="post" name="post" />
                        <br />
                        <button className='chat-button' > Send </button>
                    </form>
                    
                </Col>
            </Row>
            <Row>
                <Col className='chat-box' >

                </Col>
            </Row>
        </Container>
    )

}

export default ProjectShow