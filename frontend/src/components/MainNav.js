import React from 'react';
// import image from 'logo.png'

function MainNav() {
    return (
    
      
    <nav class="navbar sticky-top navbar-light" style={{backgroundColor: "#84c4be"}}>
        <img class="navbar-brand" src='https://i.imgur.com/nHbE8tX.png' height="85px" width="300px"/>  
        <a class="nav-item">Skills</a>
        <a class="nav-item">Projects</a>
        <a class="nav-item">Logout</a>
    </nav>
    );
  }
  
  export default MainNav;