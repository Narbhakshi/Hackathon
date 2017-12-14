import React from "react";

import Header from "../Header";
import MainSection from "./MainSection";

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
            <div class="wrapper">
                <div class="content">
              <MainSection/>
            </div>
          </div>
      </div>
    );
  }
}