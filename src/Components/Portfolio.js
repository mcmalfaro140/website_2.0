import React from 'react';
import '../style/portfolio.css'
import thinking from '../img/thinking.svg';
import ProjectsContainer from '../Components/ProjectsContainer'
import dashboardImg from '../img/dashboard.png';
import mywash from '../img/carwash.png';
import event from '../img/event.png';

class Portfolio extends React.Component {
    state = { 
        projects : [
            {
                img : dashboardImg,
                title : "AWS Resources Dashboard",
                desc: "Web application built to monitor resources metrics and logs from Amazon Web Servides using charts and tables.",
                projUrl: 'https://awsdashboard.netlify.com/',
                projGit: 'https://github.com/mcmalfaro140/ccc_dashboard_react'
            },
            {
                img : mywash,
                title : "Carwash App on Android",
                desc: "Android application that connects users willing to do a carwash for another user.",
                projUrl: 'https://github.com/mcmalfaro140/MyWashApp',
                projGit: 'https://github.com/mcmalfaro140/MyWashApp'
            },
            {
                img : event,
                title : "Event Brite Copy",
                desc: "Web application that allows users to buy and sell tickets for events.",
                projUrl: 'https://eventbrite140.netlify.com/',
                projGit: 'https://github.com/VeronicaToriz/EventBrite'
            }
        ]
     }
    render() { 
        const project = this.state.projects.map((item, i) => {
            return(
                <ProjectsContainer proj={item}/>
            )
        });
        return ( 
            <div className="App porContainer">
                <section id="Portfolio">
                    <div className = "portfolio container">
                        <div className="title">Portfolio</div>
                        <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>
                        <div class="row">
                            <img className="thinkingSvg col-sm" src={thinking}/>
                            <div className="col-md">
                                {project}
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Portfolio;