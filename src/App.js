import Header from "./Header"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Project from "./Projects";
import './App.css';
import Know from "./Knowledge";
import Navbar from "./Navbar";
import Snowfall from "./Snowfall";
import Intro from "./Introduction";
import Test from "./Test";
import About from "./About";
import Skills2 from "./Skills2";
import Contact from "./Contact";
import Footer from "./Footer";
import { useRef } from "react";
import ScrollToAnchor from "./Scroll";
function App() {
  const about = useRef(null)
  const section2 = useRef(null)
  const section3 = useRef(null)

const scrollToSection = (elementRef) => {
window.scrollTo({
  top: elementRef.current.offsetTop,
  behavior: "smooth",
 });
}
  return (
    <Router>
    <div className="App">
    <Navbar func={scrollToSection} />
      <Intro />
      <About ref={about} />
      <Project />
      {/* <Know /> */}
      <Skills2 />
      <Contact></Contact>
      <Footer></Footer>
      <Snowfall />
    </div>
    </Router>
  );
}

export default App;
