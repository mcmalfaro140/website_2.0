import React from 'react';
import '../style/projectContainer.css'


class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <div className="projectContainer">
                <div className="projectImg">
                    <img className="refImage col-sm" src={this.props.proj.img}/>
                </div>
                <div className="projectTitle">
                    {this.props.proj.title}
                </div>
                <div className="projectDesc">
                    {this.props.proj.desc}
                </div>
                
                <div className="btnBox">
                    <a href={this.props.proj.projUrl}><button class="buttonProject btn-primary" >Project Page</button></a>
                    <a href={this.props.proj.projGit}><button class="buttonProject btn-primary" >Project Github</button></a>
                </div>
                
                
            </div>
         );
    }
} 
 
export default ProjectsContainer;