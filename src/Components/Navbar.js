import React from 'react';
import '../style/nav.css';
import logo from '../img/logo_transparent2.png';


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark static-top">
          <div class="container">
            <img className="logo" src={logo} alt=""/>
            <h2 className="logoName">Misael Corvera</h2>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#Home">Home</a>
                </li>
                <span> |</span>
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="#Portfolio" >Portfolio</a>
                </li>
                <span> |</span>
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="#Resume">Resume</a>
                </li>
                <span> |</span>
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="#Contact">Contact</a>
                </li>
                <span> |</span>
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="#About">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    );
  }
}

export default NavBar;


