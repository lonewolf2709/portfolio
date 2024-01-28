import { useState,useEffect } from "react";
import React from "react";
import "./Intoduction.css";
import { Slide, Fade } from "react-awesome-reveal";
function Intro()
{
    const texts = ['Student','Developer'];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(texts[index]);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Delete text letter by letter
    if (!showText) {
      const interval = setInterval(() => {
        setText((prevText) => prevText.slice(0, -1));
        if (text.length === 0) {
          clearInterval(interval);
          setShowText(true);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [showText, text]);

  useEffect(() => {
    // Display new text letter by letter
    if (showText) {
      const nextIndex=(index+1)%texts.length;
      // setIndex(nextIndex);
      const nextText = texts[nextIndex];
      const interval = setInterval(() => {
        if (text === nextText) {
          clearInterval(interval);
          setIndex(nextIndex);
          setShowText(false);
        }
        else{
        setText((prevText) => prevText + nextText[prevText.length]);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [showText, text, index, texts]);
    return <div className="Intro-content" id="top">
        <Fade direction="up" triggerOnce>
        <p className="hi">Hi I am,</p>
        </Fade>
        <Slide direction="left" triggerOnce>
        <h1>Saad Ahmed</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
        <p>I am a {text}</p>
        </Slide>
    </div>
}
export default Intro;