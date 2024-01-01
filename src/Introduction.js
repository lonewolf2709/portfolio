import React from "react";
import "./Intoduction.css";
import { Slide, Fade } from "react-awesome-reveal";
function Intro()
{
    return <div className="Intro-content" id="top">
        <Fade direction="up" triggerOnce>
        <p className="hi">Hi I am,</p>
        </Fade>
        <Slide direction="left" triggerOnce>
        <h1>Saad Ahmed</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
        <p>I am a Student and a Developer</p>
        </Slide>
    </div>
}
export default Intro;