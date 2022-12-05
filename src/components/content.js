import React from "react";
import "./styles/content.css";
import Header from "./header";

export default function Content(){
    return(
        <>
        <div id="main">
            <Header/>
            <div id="main-content">
                <div id="text">
                    <p id="main-head">
                        Hii!! Nice to see you!
                    </p>
                    <p id="main-body">
                        
                    </p>
                    <a href="?" id="explore-button">Know More About Me →</a>
                </div>
                <img src="images/hero.png" alt="" id="main-image"></img>
            </div>
        </div>

        <div id="feature-cards">
            <div class="card">
                <img src="images/fast.png" alt=""></img>
                <span>Faster Development</span>
            </div>
            <div class="card">
                <img src="images/responsive.png" alt=""></img>
                <span>Responsive Deisgns</span>
            </div>
            <div class="card">
                <img src="images/content.png" alt=""></img>
                <span>Content Management</span>
            </div>
        </div>


    </>
    );
}