import React from 'react';
import '../style/resume.css'
import resume from '../img/myResumeImg.jpg'


class Resume extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="App resumeContainer">
                <section id="Resume">
                    <div className="resume">
                        <div className="title">My Resume</div>
                        <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>
                        <div className="resumeImgContainer">
                            <img className="resumeImg" src={resume}/>
                        </div>
                        <div >
                        <a href="../myResume.pdf" download="MisaelCorveraResume.pdf" ><button class="downloadProjectbtn btn-primary" >Download My Resume</button></a>
                        </div>
                    </div>
                    
                </section>
            </div>
         );
    }
}
 
export default Resume;