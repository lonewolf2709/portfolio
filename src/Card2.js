import React from "react";
import "./Card2.css";
import { Zoom } from "react-awesome-reveal";
function Card2(props){
    return <div className="image-container">
        <img className="image" src={props.img}></img>
        <div className="overlay">
        <div className="overlay-content">
            <Zoom cascade damping={0.05}>
            <p className="conhead">{props.head}</p>
            <p className="concon">{props.content}</p>
            </Zoom>
        </div>
      </div>
    </div>
}
export default Card2;
