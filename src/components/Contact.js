import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    const mystyle={
        backgroundColor:'black',
        padding:'40px'
        
    };
    return (
      <div style={mystyle}>
        <h1>Get In Touch</h1>
        <input type="text" name="firstname" id="firstname" placeholder='First Name'/>
        <input type="text" name="lastname" id="lastname" placeholder='Last Name' />
        <input type="email" name="email" id="email"placeholder='Email Address' />
        <input type="number" name="mobno" id="mobno"placeholder='Phone No.' />
        <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px',width:'500px'}}></textarea>
  <label for="floatingTextarea2">Message</label>
</div>

        <button>Send</button>
      </div>
    )
  }
}

export default Contact
