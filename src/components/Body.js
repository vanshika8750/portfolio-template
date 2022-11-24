import React, { Component } from 'react'
import'./logo_port.jpg';
export class Body extends Component {
  render() {
    const divstyle={
       margin:'100px 20px',
       padding:'20px',
       display:"flex",
       fontSize:'larger',
    };
    return (
      <div style={divstyle}>
    
      <div>
        <button type="button" style={{height:'50px',borderRadius:"50px",fontSize:'24px',border:'4px solid black',margin:'20px 0px'}}>Welcome to my Portfolio</button>
        <h1>Hi! I am Vanshika</h1>
        <h1>Web Developer</h1>
        <div className="aboutme" style={{margin:'30px 0px',fontSize:'22px'}}>
            Hiiiiiii.......Myself Vanshika Jain, currently persuing Bachelors of Technology(B.Tech) in Computer Science Branch from JSS Academy of Technical Education,Noida.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati magni vitae nam doloremque exercitationem alias sint soluta non inventore.
        </div>
        <div style={{margin:'40px 10px'}}>
          <h2>Let's Connect</h2>
        </div>
        </div>
        <div>
        <img src="https://p.kindpng.com/picc/s/247-2476522_download-free-png-dlpng-girl-student-clipart-transparent.png" alt="girl"  />
        </div>
      </div>
    )
  }
}

export default Body
