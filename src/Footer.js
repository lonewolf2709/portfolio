import React from "react"
import "./Footer.css";
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer()
{
    var d=new Date();
    var x=d.getFullYear();
    return <div className="footer-main">
        <CopyrightIcon className="icon"/>
        <p>{x} Saad Ahmed</p>
    </div>
}
export default Footer;