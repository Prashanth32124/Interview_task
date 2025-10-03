import React from 'react';
import './CSS/task1.css';
import p1 from  "./CSS/back32124.png";
import p2 from  "./CSS/logo.png";
import p3 from "./CSS/bb.png";
import w from "./CSS/w.png";
import insta from "./CSS/insta.png";
import face from "./CSS/facebook.png";
import twit from "./CSS/twitter.png";
function Task1() {
  return (
    <div id="container1">
        <h1 id="dh">Our Philosophy</h1>
        <nav class="main-nav-links">
        <a class="n" href="#">Home</a>
        <a class="n" href="#">Services</a>
        <a class="n" href="#">About</a>
        <a class="n" href="#">Contact</a>
        </nav>
         <div class="tag">
         <img  src={p2}/>
      </div>
      <img src={p1} alt="background" />
      <div class="tag1" >
        Build a Mordern Interior
      </div>
       <p id="heading">creating comfort with style</p>
       <p id="message">Design smart,live smart and always choose Aceon for interiors</p>
       <button id="b1">Get Started</button>
       <button id="b2">Contact</button>
       <div id="sub-cont">
        <div id="imagecont">
          <img src={p3}/>
        </div>
        <div id="mattercont">
         <h2 id="a">Furniture Design</h2>
         <p id="a1">"custom furniture solutions from your home or office -- stylish,functional , and within your budget. Serving varansai with preminum designs,on time."</p>
         <p id="a2">Style within your Budget</p>
        </div>
       </div>
       <div id="trapezoid">
        <img src={w}/>
       </div>
       <div id="rat">
        <img src={w}/>
       </div>
       <div id="fc">
        <img src={insta}/>
        <img src={face}/>
        <img src={twit}/>
       </div>
    </div>
  );
}

export default Task1;
