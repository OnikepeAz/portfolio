
function footer() {
    var d = new Date();
    var date = d.getFullYear();
    return (
       
    <footer style={{
      position: 'relative'
    }}>
          <p className="footp"> Learn | Socialize | Code</p>
        <div className="cright">
            Copyright © {date} OnikepeAz &nbsp; 
        </div>
    </footer>
   
    )
  }
  
  export default footer;
  