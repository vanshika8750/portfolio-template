import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    const mystyle={
        backgroundColor:'black',
        padding:'15px'
    };
    return (
      <div >
        
        <footer style={mystyle}>
        <br />
        <br /><br /><br /><br /><br /><br />
            <div>
            <h1>LOGO</h1>
            </div>
           <div style={mystyle}>
           <a href="/"><img src="" alt="" /></a>
            <a href="/">lin</a>
            <a href="/">lin</a>
            <div>
            Copyright 2022.All Rights Reserved.
            </div>
           </div>
        </footer>
      </div>
    )
  }
}

export default Footer
