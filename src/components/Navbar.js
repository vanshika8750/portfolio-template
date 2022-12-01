import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    const mystyle={
      margin:' 0px 13px '
    }
    return (
      <div >
        
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
   
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="info">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      
        <li className="nav-item"style={mystyle}>
          <a className="nav-link active" aria-current="page" href="./body.js">Home</a>
          </li>
          <li className="nav-item"style={mystyle}>
          <a className="nav-link active" aria-current="page" href="./Skills.js">Skills</a>
          </li>
          <li className="nav-item"style={mystyle}>
          <a className="nav-link active" aria-current="page" href="#">Projects</a>
          </li>
        <li className="nav-item"style={mystyle}>
          <a className="nav-link" href="https://www.linkedin.com/in/vanshika-jain-915500229/" ><img src="https://toppng.com/uploads/preview/linkedin-logo-black-png-linkedin-icon-black-and-white-11562906557v2906x3pr2.png" alt="LinkedIn" style={{height:'22px'}} /></a>
          </li>
          <li className="nav-item"style={mystyle}>
          <a className="nav-link" href="#"><img src="https://i.pinimg.com/originals/9b/e7/a0/9be7a031fcd2215a8827ae719d546182.jpg" alt="Facebook" style={{height:'32px'}} /></a>
          </li>
          <li className="nav-item"style={mystyle}>
          <a className="nav-link" href="#"><img src="https://image.similarpng.com/very-thumbnail/2021/01/Instagram-icon-with-flat-design-on-transparent-background-PNG.png" alt="Insta" style={{height:'29px'}} /></a>
          </li> 
        <button  type="button" style={{borderRadius:'30px',width:'200px',margin:'0px 30px'}} >Let's Connect </button>
        
      </ul>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
