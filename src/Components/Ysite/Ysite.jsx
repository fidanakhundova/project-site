import React, { Component } from "react"
import "./style.css"


 class Ysite extends Component {

    render(){
     return(
      <div className="container"> 
      <div className="top">
      <div className="top-left">
      <i className="fa-sharp fa-solid fa-basketball"></i>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-square-twitter"></i>
      <i className="fa-brands fa-pinterest"></i>
    </div>
   
    <div className="top-right">
      <div className="location">
    <i class="fa-sharp fa-solid fa-map-location-dot"></i> 203 Madison Ave, NY, USA<br></br>
ADDRESS
    </div>
   <div className="alarm">
   <i className="fa-regular fa-alarm-clock"></i>Monday - Friday 9am - 6pm<br></br>
TIMEING
   </div>
    <div className="letter">
    <i className="fa-solid fa-envelope"></i>envato@gmail.com<br></br>
MAIL TO US</div></div>
    </div> 
<img src="https://californiareleaf.org/wp-content/uploads/2019/06/Canva-People-Having-Meeting-Inside-Conference-Room-e1561580648654-687x430.jpg"/>
    
     <h1>World Digital <br></br> Conference</h1>
    </div> 
     )  
}
}



 export default Ysite