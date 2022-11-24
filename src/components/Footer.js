import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    const mystyle={
        display:'flex',
        backgroundColor:'black',
        padding:'30px'
    };
    return (
      <div>
        <footer style={mystyle}>
            <div>
            <h1>LOGO</h1>
            </div>
           <div style={mystyle}>
           <a href="/">lin</a>
            <a href="/">lin</a>
            <a href="/">lin</a>
            <div>
            Copyright 2022.All Rishts Reserved.
            </div>
           </div>
        </footer>
      </div>
    )
  }
}

export default Footer
