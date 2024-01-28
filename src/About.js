import React from "react";
import "./About.css";
import {Fade,Slide} from "react-awesome-reveal";
function About(){
    return <div className="main" id="about">
        <Fade direction="up" triggerOnce><div  className="head"><h2>About Me</h2></div></Fade>
        <div className="about-content">
            <div className="content">
                <Fade direction="down" triggerOnce><h3>An Aspiring Developer and Tech Enthusiast on a Continuous Journey</h3></Fade>
                <Fade direction="up" triggerOnce><p>I am a 20-year-old student pursuing Mathematics and Computing at Delhi Technological University. Proficient in web development and continually exploring emerging technologies, I am currently focused on delving into the vast realm of Data Science to broaden my skill set. Beyond coding, joy is found in football and the immersive worlds of video games. This journey is a fusion of academic pursuit and a passion for staying at the forefront of technological innovations.</p></Fade>
            </div>
            <Slide direction="right" triggerOnce>
            <img className="about-image" src="https://as1.ftcdn.net/v2/jpg/05/57/48/78/1000_F_557487891_SCDkxSuX2lLnCYoJzHadWQWVBOupwD6m.jpg"></img>
            </Slide>
        </div>
    </div>
}
export default About;