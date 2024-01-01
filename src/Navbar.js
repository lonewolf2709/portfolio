import React from "react";
import "./Navbar.css";
import { NavHashLink } from 'react-router-hash-link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";
import { Link as MLink} from "react-router-dom";
import { Bounce,Fade } from "react-awesome-reveal";
function Navbar(props)
{
    return <div className="header">
    <Bounce cascade damping={0.2} triggerOnce>
        <MLink style={{ textDecoration: 'none' }} to="https://drive.google.com/file/d/1xxDY6lkkVIffv86Aj_S4OiGEMk79Tf0q/view?usp=drive_link"><div className="nav-item resume">
            <h4>Resume</h4>
            <div className="under resumeu"></div>
        </div></MLink>
        <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}><div className="nav-item">
            <h4>Home</h4>
            <div className="under"></div>
        </div>
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
        <div className="nav-item">
            <h4>About</h4>
            <div className="under"></div>
        </div>
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
        <div className="nav-item">
            <h4>Projects</h4>
            <div className="under"></div>
        </div>
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}>
        <div className="nav-item">
            <h4>Skills</h4>
            <div className="under"></div>
        </div>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
        <div className="nav-item">
            <h4>Contact</h4>
            <div className="under"></div>
        </div>
        </Link>
        </Bounce>
    </div>
}
export default Navbar;