import logo from "../assets/logo.png";
import { Link } from 'react-router-dom'

function Header() {
    return(
    <div class="nav">
        <input type="checkbox" id="nav-check"/>
         <div class="nav-header">
          <div class="nav-title">
           <Link to=""><img src={logo} alt='Home' height="40"/></Link>
          </div>
         </div>
           <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
           </div>
         <div class="nav-links">
           <Link to="/">Home</Link>
           <Link to="/skill">Skills</Link>       
           <Link to="/portfolio">Portfolio</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/blog">Blog</Link>
         </div>
    </div>
    )
}
export default Header;