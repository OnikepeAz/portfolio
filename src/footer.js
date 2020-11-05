import React from 'react';
import './App.css';


function footer() {
    var d = new Date();
    var date = d.getFullYear();
    return (
       
      <footer class="fl w-100">
          <p class="f3 b tc mt4 black"> Learn | Socialize | Code</p>
        <div class="w-100 ph1 pv3 pv4-l flex items-center mw9 cf center">
            <div class="center w-100 w-40-ns flex items-center">
                <span class="center pa3">
  <a class="link near-black hover-silver dib h2 w2 mr3" href="https://github.com/OnikepeAz" title="GitHub">
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
  </a>
  <a class="link hover-silver near-black dib h2 w2 mr3" href="#" title="Stack Overflow">
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M12.658 14.577v-4.27h1.423V16H1.23v-5.693H2.65v4.27h10.006zm-8.583-1.423h7.16V11.73h-7.16v1.424zm.173-3.235l6.987 1.465.3-1.38L4.55 8.54l-.302 1.38zm.906-3.365l6.47 3.02.602-1.295-6.47-3.02-.602 1.295zm1.81-3.19l5.478 4.57.906-1.078-5.477-4.57-.905 1.077zM10.502 0L9.338.863l4.27 5.735 1.164-.862L10.5 0z"/></svg>
  </a>
  
  <a class="link hover-silver near-black dib h2 w2 mr3" href="https://medium.com/@mrmrs_/" title="Medium">
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z"/></svg>
  </a>
  <a href="https://www.linkedin.com/in/onikepe-abdulazeez/" class="link dim dib black-70">
        <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
          <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
            y1="0" x2="23.9995" y2="48.0005" >
            <stop offset="0" ></stop>
            <stop offset="1" ></stop>
          </linearGradient>
          <path fill="currentColor" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
          ></path>
          <g >
            <g >
              <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
              ></path>
            </g>
          </g>
        </svg>
      </a>
                </span>
            </div>
        </div>
        <div class="fl tc pa3 bg-black near-white w-100 f7 fw5 tracked">
            Copyright © {date} OnikepeAz &nbsp; 
            <div class="w-100 cf dn-l pv1"></div> 
        </div>
    </footer>
   
    )
  }
  
  export default footer;
  