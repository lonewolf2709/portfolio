import React from "react";
import "./Skills2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Fade,Zoom } from "react-awesome-reveal";
function Skills2()
{
    return <div className="outer" id="skills">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
        <div className="heading-p"><h2>My Skills</h2></div>
        </Fade>
        <div className="inner">
        <Zoom cascade damping={0.35} triggerOnce>
        <p className="sigele2">C++</p>
        <p className="sigele2">CP</p>
        <p className="sigele2">DSA</p>
        <p className="sigele2">HTML</p>
        <p className="sigele2">CSS</p>
        <p className="sigele2">Java</p>
        <p className="sigele2">JavaScript</p>
        </Zoom>
        </div>
        <div className="inner">
        <Zoom cascade damping={0.35} triggerOnce>
        <p className="sigele2">Node.js</p>
        <p className="sigele2">Express.Js</p>
        <p className="sigele2">MongoDB</p>
        <p className="sigele2">React.Js</p>
        <p className="sigele2">Git/GitHub</p>
        <p className="sigele2">OOPS</p>
        <p className="sigele2">Python</p>
        </Zoom>
        </div>
        <Fade direction="up" cascade damping={0.1} triggerOnce>
        <div className="extra"><DoubleArrowIcon /><p>Completed more than 600 Leetcode questions across a range of difficulty levels.</p></div>
        <div className="extra"><DoubleArrowIcon /><p>Rated 3 Star on CodeChef</p></div>
        <div className="extra"><DoubleArrowIcon /><p>Rated 5 Star on HackerRank</p></div>
        </Fade>
    </div>
}
export default Skills2;