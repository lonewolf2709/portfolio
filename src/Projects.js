import React from "react";
import Card from "./Cards";
import Card2 from "./Card2";
import "./Projects.css"
import {Fade} from "react-awesome-reveal";
function Project(){
    return (<div className="container1" id="projects">
        <Fade direction="down" triggerOnce><div  className="heading-p"><h2>My Projects</h2></div></Fade>
        <div className="cardsslider">
        <Fade direction="up" cascade damping={0.3} triggerOnce>
        <Card2 img="https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png" head="E-commerce Website" content="This E-commerce Website built using React.Js for frontend, Node for backend, and uses FireBase to store Data. It allows the user to add and  delete Items from the cart, and perform multiple functionalities. It also uses Google Authentication to Authenticate the User and Stripe to process the Payment." />
        <Card2 img="https://img.freepik.com/premium-vector/home-cinema-concept-watching-movies-home-movie-night-with-popcorn-drink-flat-style_490811-86.jpg?w=2000" head="Streaming Website" content="A streaming Platform that is built using React.Js for frontend, Node.js for Backend, and firebase as a Database. It first Authenticates the user, then leads to the home page where there are different sections for new launches, originals, etc. There is also an option to add a movie to a Watch List." />
        <Card2 img="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg" head="Blog Website" content="Built using HTML CSS and Javascript for the front end and Node.Js for the back end and this project uses MongoDB as a DataBase. It allows users to write daily blogs and all the blogs to be displayed on a single page in a consistent form which can be expanded on selecting it." />
        <Card2 img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmtBL2mgbui0VgUH-E3cuU6XUNptPk2CTCQ&usqp=CAU" head="Drum Kit" content="Built using HTML, CSS, and Javascript it contains buttons corresponding to different drum sounds. On clicking the respective button or pressing the respective key on the keyboard the particular sound is played." />
        </Fade>
        </div>
    </div>)
}
export default Project;