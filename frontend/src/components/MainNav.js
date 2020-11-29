import React from 'react';
import { Link } from 'react-router-dom';

function MainNav() {
    const bulletStyle = {
        textDecoration: 'none',
        listStyleType: 'none',
        fontSize: '30px',
        color: 'white',
        right: '0px'
    }
    return (
    
      
    <div class="navbar sticky-top navbar-light" style={{backgroundColor: "#001f2e", opacity: '95%'}}>
        <Link to='/dashboard' style={bulletStyle}>
            <img src='https://i.imgur.com/nHbE8tX.png' height="85px" width="300px"/> 
        </Link>
        <Link to='skills' style={bulletStyle}> 
            <li >Skills</li>
        </Link>
            <Link to='projects' style={bulletStyle}>
            <li >Projects</li>
        </Link>
        <button style={{backgroundColor: "#001f2e",  fontSize: '30px',
        color: 'white', border: 'none'}}> Logout </button>
    </div>
    );
  }
  
  export default MainNav;