import React from 'react';
import { Link } from 'react-router-dom';

function MainNav() {
    return (
    
      
    <nav class="navbar sticky-top navbar-light" style={{backgroundColor: "#24454b", opacity: '95%'}}>
        <Link to='/'>
            <img class="navbar-brand" src='https://i.imgur.com/nHbE8tX.png' height="85px" width="300px"/> 
        </Link>
        <Link to='skills'> 
            <a class="nav-item" href="#" >Skills</a>
        </Link>
        <Link to='projects'>
            <a class="nav-item" href="#" >Projects</a>
        </Link>
        <a class="nav-item" href="#">Logout</a>
    </nav>
    );
  }
  
  export default MainNav;