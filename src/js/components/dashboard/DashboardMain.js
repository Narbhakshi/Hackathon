import React from "react";



import FadeContent from "./FadeContent";
import FadeContentFooter from "./FadeContentFooter";
import Header from "../Header";
import WelcomeSection from "./WelcomeSection";
import DevDashboard from "./DevDashboard";


export default class Dashboard extends React.Component {


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
              <DevDashboard/>
            </div>
          </div>
      </div>
    );
  }
}
