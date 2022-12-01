import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    const mystyle={
      backgroundImage:"url('https://cdn.pixabay.com/photo/2022/01/12/18/51/contact-us-6933645_960_720.jpg')",
      backgroundSize: 'cover',
        padding:'40px'
    };
    const heading={
      textAlign:'center',
      fontWeight:'bold'
    }
    const inpp={
      margin:'4px',
      padding:'6px',
      borderRadius:'12px'
    }
    return (
      <div style={mystyle}>
        <h1 style={heading}>Get In Touch</h1>
        <input type="text" name="firstname" id="firstname" placeholder='First Name' style={inpp}/>
        <input type="text" name="lastname" id="lastname" placeholder='Last Name' style={inpp}/><br />
        <input type="email" name="email" id="email"placeholder='Email Address' style={inpp}/>
        <input type="number" name="mobno" id="mobno"placeholder='Phone No.'style={inpp} />
        <div class="form-floating"style={inpp}>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '130px',width:'500px'}}></textarea>
  <label for="floatingTextarea2">Message</label>
</div>

        <button style={inpp}>Send</button>
        <br />
        <br /><br /><br /><br /><br /><br />
      </div>

    )
  }
}

export default Contact
