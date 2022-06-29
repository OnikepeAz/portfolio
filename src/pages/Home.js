import me from "../assets/wbdev.jpg"

function Home() {
    return (
        <div>
             <div className="hero">
              <div className="hero1">
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-github"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
                 <h1>I am AbdulAzeez Onikepe</h1>
                 <p>A web developer who enjoys taking complex problems and turning them into simple and beautiful interface designs
                 </p>
                 <button>My Portfolio</button>
              </div>
              <div className="hero2" >
                <img src={me} alt=""/>
              </div>
              </div>
        </div>
    )
}
export default Home;