import React from 'react';
// import image from 'logo.png'

function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <img src='https://i.imgur.com/nHbE8tX.png' height="85px" width="300px"/>
      <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link active" href="#">About</a>
      <a class="nav-item nav-link" href="#">Contact</a>
      <a class="nav-item nav-link" href="#">Login</a>
    </div>
      </div>
    </nav>
    );
  }
  
  export default Navbar;
  