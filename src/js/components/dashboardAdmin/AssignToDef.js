import React from "react";

export default class AssignToDef extends React.Component {

   updateStatus(e){
      alert(e.target.innerText);
    }
    assignDefect(e, id){
      alert(e);
    } 
    assignDefect(id){
      alert(id);
    } 

  render() {
    return (
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Assign
        <span class="caret"></span></button>
        <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
          <li role="presentation" onClick={this.updateStatus.bind(this)}><a role="menuitem">Saurabh</a></li>
          <li role="presentation" onClick={this.updateStatus.bind(this)}><a role="menuitem">Shivam</a></li>
          <li role="presentation" onClick={this.updateStatus.bind(this)}><a role="menuitem">Mdadil</a></li>
          <li role="presentation" onClick={this.updateStatus.bind(this)}><a role="menuitem">Shobhit</a></li>
          <li role="presentation" onClick={this.updateStatus.bind(this)}><a role="menuitem">Vishal</a></li>
          <li role="presentation" onClick={this.updateStatus.bind(this)}><a role="menuitem">Rahul</a></li>
        </ul>
      </div>
    );
  }
}
