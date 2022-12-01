import React, { Component } from "react";

export class Projects extends Component {
  render() {
    const divstyle={
        textAlign:'center',
        backgroundColor:'black',
        color:'white',
        margin:'-30px 0px'
    };
    const tabstyle={
      margin:'auto'
    };
    return (
      <div style={divstyle} >
        <br /><br />
        <h1>Projects</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
        voluptates voluptate et quis esse, dignissimos numquam distinctio
        obcaecati ullam minus rerum mollitia dolore architecto nam delectus
        dolorem quidem quod. Eveniet.
        <nav aria-label="..."style={tabstyle}>
          <ul class="pagination pagination-lg">
            <li class="page-item active" aria-current="page">
              <span class="page-link">Tab 1</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Tab 2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
               Tab 3
              </a>
            </li>
          </ul>
        </nav>
      </div>
     
    );
  }
}

export default Projects;
