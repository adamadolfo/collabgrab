import React, {useState} from "react"
import { connect } from 'react-redux'
import { makePost } from '../actions/userActions'


function BlogPost(props) {
    let [post, setPost] = useState("")

    const handleType = (e) => {
        setPost(post = e.target.value)
    }

    const handlePost = (e) => {
        e.preventDefault()
        const postObj = {
            post: post,
            user_id: props.user.id
        }
        props.makePost(postObj)
    }

    return(
            <div class="row dash-row-1">
                <div class="col post-display">
                   <h1>Posts</h1>
                   <button onClick={props.showPost} type="button" class="btn btn-secondary" style={{top: "10px", position: "absolute", right: "10px"}}> Profile </button>
                    <form onSubmit={(e) => handlePost(e)}>
                        <textarea onChange={(e) => handleType(e)} value={post} cols="75"/>
                        <br/>
                        <button type="submit"  class="btn btn-secondary" style={{width: "550px", marginBottom: "50px"}}> Post </button>
                    </form>
                    <div className="container">
                        {props.user.blogs.map(blog => <div className="blog-post"> 
                            <div className="row blog-box"> 
                                <img src={props.user.img} style={{height: "50px", width: "50px", position: "absolute", left: "10px"}} />
                                <div style={{position: "absolute", left: "70px", fontWeight: "bold"}}> {props.user.name}  </div>
                                <div style={{position: "absolute", right: "10px"}}> {blog.date}  </div> 
                            </div>  
                            <div className="row blog-box" > 
                                {blog.text} 
                            </div> 
                        </div>)}
                    </div>
                </div>
            </div>
                            
                            

    )

}

export default connect(null, {makePost})(BlogPost)






