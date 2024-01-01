import React from "react";
import "./Knowledge.css"
import KnowCard from "./KnowCard.js";
function Know()
{
    return (<div className="help">
        <h1>What I Know</h1>
        <div className="mulcard">
        <KnowCard />
        <KnowCard />
        <KnowCard />
        <KnowCard />
        </div>
    </div>)
}
export default Know;