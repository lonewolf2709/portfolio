import React,{useRef,useState} from "react";
import "./Contact.css";
import { TextRotationAngledown } from "@mui/icons-material";
import { Fade,Slide } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
function Contact(){
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_27vsbci';
    const templateId = 'template_8zmq3au';
    const publicKey = 'yy4T6qqA1319TADEP';

    // Create a new object that contains dynamic template params
    const templateParams = {
      user_name: name,
      user_email: email,
      to_name: 'Saad Ahmed',
      user_message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

    return <div className="mainc" id="contact">
    <Fade direction="up" triggerOnce>
        <div className="header3"><h2>Contact</h2></div></Fade>
        <Slide direction="left" triggerOnce>
        <form onSubmit={sendEmail}>
        <div className="Contactme">
            <div className="inner-head">Your Name</div>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <div className="inner-head">Your Email Address</div>
            <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <div className="inner-head">Your Message</div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit">Send</button>
        </div>
        </form>
        </Slide>
    </div>
}
export default Contact;