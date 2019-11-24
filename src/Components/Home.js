import React from 'react';
import '../style/home.css';

console.log("Hello Yi")


function Main() {
  return (
    <div className="App">
      <section id="Home">
        <div className="home">
          {/* <img className="imglogo" src={require('../img/logo_transparent2.png')}></img> */}
          <img className="imglogo" src={require('../img/logo_orange.png')}></img>
          
          <div className="box">
            <div className="name">Hello, I'm Misael Corvera.</div>
            <div className="slogan">I'm Software Developer</div>
            <button className="btn" class="btn btn-primary" >Download my resume</button>
            <button className="btn" class="btn btn-primary" >See My Projects</button>
            
            <div>
              <i class="fab fa-github-square"></i>
              <i class="fab fa-linkedin" ></i>
              <i class="fas fa-envelope"></i>
            </div>

          </div>
        
          <div class="arrow bounce">
            <a data-scroll style={{color: 'white', textDecoration: 'none'}}class="fas fa-angle-double-down" href="#Portfolio"></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
