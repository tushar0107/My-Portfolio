import React from "react";
import "./styles/techs.css";

export default function Techs(){
    return(
        <>
            <h2>Techs I know</h2>
            <div id="techs">
                <div className="techs-child">
                    <img src="images/python.png" alt="python-logo"></img>
                    <p>Python</p>
                </div>
                <div className="techs-child">
                    <img src="images/reactjs.png" alt="python-logo"></img>
                    <p>Python</p>
                </div>
                <div className="techs-child">
                    <img src="images/javascript.png" alt="python-logo"></img>
                    <p>Python</p>
                </div>
                <div className="techs-child">
                    <img src="images/html5.png" alt="python-logo"></img>
                    <p>Python</p>
                </div>
                <div className="techs-child">
                    <img src="images/css3.png" alt="python-logo"></img>
                    <p>Python</p>
                </div>


            
               
            </div>
        </>
    );
}