import React, { Component } from 'react'

export class Skills extends Component {
  render() {
    const divstyle={
      height:'450px',
      margin:'30px',
      textAlign: 'center',
      backgroundColor:'black',
      color:'white',
      borderRadius:'100px',
      padding:'50px'
      
    };
    const space={
      padding:"30px"
    };
    const col={
      margin:'15px',
    };
    return (
      <div style={divstyle}>
        <div className="container">
        <h1>Skills</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam dolor deleniti venam, natus voluptas? Illum ipsum at quia consequatur ex, magnam labore. Quos impedit, hic rerum omnis culpa delectus?
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" style={space}>
      <div style={col}>
      <h3>Web Development</h3>
      
</div>
<div style={col}>
<h3>Web Development</h3>
      
</div>
<div style={col}>
<h3>Web Development</h3>
      
</div>
    </div>
    <div className="carousel-item" style={space}>
      Will upload soon........
    </div>
    <div className="carousel-item"style={space}>
    Will upload soon........
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
    )
  }
}

export default Skills
