import React from 'react';
import './App.css';
// import logo from './hustle.png';
import me from "./me.jpg";
import logo from "./logo.png";

function home() {
    
    return (
        <div>
        <section class="absolute w-100 fl  ">
            <nav class="w-100 center f6 f5-ns inline-flex items-center fw5 h3 " >
                    <div class=" v-mid w-40 tl ph2">
                        <a href="/" class=" v-mid mid-gray link dim" title="Home">
                            <img src={logo} class="fl dib h3 ph3 " alt=""/>
                        </a>
                    </div>
                    <div class=" v-mid w-60 tr pa3">
                        <a href="/contact" class=" no-underline inline-flex items-center mid-gray">
                        <button id="click2"><i class="mr2 mr3-l f5 blue "></i>SAY HELLO
                        </button>
                        </a>
                    </div>
            </nav>
            
        </section>    
        <div class="context">
        <div class="cf w-100 tc pa2">
             <article class="dib mw8 tc ">
                <img src={me} alt="" class=" br-100 center ph2 h5 "/>               
                <p class="f4 center white  measure lh-copy Courier-New  ">
                  Hello, I'm <b class="f4 b white">  ONIKEPE ABDULAZEEZ </b> <br/>
                 Full Stack Developer 
                </p>
                <p class="f4-l white f5 center measure  lh-copy">
                 I enjoy taking complex problems and turning them into simple and beautiful interface designs 
                 I also love the structure of coding and always thrive to write elegants and efficient codes. Whether HTML,CSS, Javascript, React.jsor VueJs.
                 I have had several internship experience worked with team of expertise. 
                </p>
            </article>
        </div>
        </div>
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
         </div >
        <div class=" w-100 center fr mt3 tc pa3">
              <a class="f4 dim br-pill ph3 pv2 mb2 white bg-black">TECHNICAL SKILLS</a>      
        </div>
         <ul class="tilesWrap">
            <li>
                <h2>01</h2>
                <h3>Programming Languages</h3>
                <p>JavaScript</p>
                <p>C#</p>
            </li>
            <li>
                <h2>02</h2>
                <h3>Web Front End </h3>
                <p>React.js</p>
                <p>Vue.js</p>
                <p>HTML5 | CSS | JS</p>
            </li>
            <li>
                <h2>03</h2>
                <h3>Web Back End and Databases</h3>
                <p>Node.js</p>
                <p>MongoDb</p>
                <p>PostgreSql</p>
            </li>
            <li>
                <h2>04</h2>
                <h3>CI/CD</h3>
                <p>Git</p>
                <p>Docker</p>font
            </li>
        </ul>
        <div class="f4 w-100 center fr mt3 tc pa3">
              <a class="f dim br-pill ph3 pv2 mb2 white bg-black">PROJECTS</a>
        </div>

       
        </div>
             )
}
  
export default home;
  