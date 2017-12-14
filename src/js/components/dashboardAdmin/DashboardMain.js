import React from "react";

import Header from "../Header";

export default class DashboardAdmin extends React.Component {


  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header/>
          <div class="wrapper">
            <div class="content">
              <h1>Hello Admin</h1>
            </div>
          </div>
      </div>
    );
  }
}