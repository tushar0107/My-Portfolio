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
                </div>
                <img src="images/hero.png" alt="" id="main-image"></img>
            </div>
        </div>

        <div id="feature-cards">
            <div class="card">
                <img src="images/fast.png" alt=""></img>
                <span>Fast Learning</span>
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

        <h1>My Journey</h1>
        <div id="about">
            
            <div class="lines">
                <div class="dot"></div>
                <div class="line"></div>
                <div class="dot"></div>
                <div class="line"></div>
                <div class="dot"></div>
                <div class="line"></div>
            </div>
            
            <div id="education">
                <p>2019-2023</p>
                <h4>Bachelor Of Engineering</h4>
                <p>Nagpur</p>
                <p>Bachelor's Degree in Computer Technology,<br/>
                    Priyadarshini College Of Engineering,<br/>
                    Nagpur
                </p>
                <hr/>
                <p>2017-2018</p>
                <h4>H.S.C Science</h4>
                <p>Nagpur</p>
                <p>Higher secondary Course in Science,<br/>
                    Vande Mataram Jr. College,<br/>
                    Nagpur
                </p>
                <hr/>
                <p>2017</p>
                <h4>S.S.C</h4>
                <p>Nagpur</p>
                <p>Charisma English Convent,<br/>Nagpur
                </p>
                <hr/>
            </div>
        </div>
        
        <div id="info">
            <div className="info-card">
                <img src="images/work-bag.png" alt=""></img>
                <p className="time">2019-2023</p><hr/>
                <br/><strong>B.E. in Computer Technology</strong>
                <p>Priyadarshini College Of Engineering,<br/>
                Nagpur</p>
                <strong>8.48 SGPA </strong>(Aggregate)
            </div>
            <div className="linex"></div>
            <div className="info-card">
                <img src="images/clg-bag.png" alt=""></img>
                <p className="time">2017-2019</p><hr/>
                <br/><strong>H.S.C</strong>
                <p>Vande Mataram Jr. College,<br/>
                Nagpur</p>
                <strong>70%</strong>
            </div>
            <div className="linex"></div>
            <div className="info-card">
                <img src="images/pencil.png" alt=""></img>
                <p className="time">--2017</p><hr/>
                <br/><strong>S.S.C</strong>
                <p>Charisma English Convent,<br/>
                Nagpur</p>
                <strong>80%</strong>
            </div>
            
            
        </div>
        

    </>
    );
}