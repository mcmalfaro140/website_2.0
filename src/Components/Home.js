import React from 'react';
import '../style/home.css';

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
            <a href="../myResume.pdf" download="MisaelCorveraResume.pdf" ><button className="btn" class="btn btn-primary" >Download my resume</button></a>
            <a href="#Portfolio"><button className="btn" class="btn btn-primary">See My Projects</button></a>
            
            <div>
              <a href="https://github.com/mcmalfaro140" style={{color:'white'}}><i class="fab fa-github-square"></i></a>
              <a href="https://www.linkedin.com/in/misael-corvera-alfaro-913293160"style={{color:'white'}}><i class="fab fa-linkedin" ></i></a>
              <a href="mailto:mcmalfaro@gmail.com"style={{color:'white'}}><i class="fas fa-envelope"></i></a>
            </div>

          </div>
        
          <div class="arrow bounce">
            <a data-scroll style={{color: 'white', textDecoration: 'none', fontSize:'220%'}}class="fas fa-angle-double-down" href="#Portfolio"></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
