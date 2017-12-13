import React from "react";

import VitalStats from "../dashboard/VitalStats";


export default class TestPage extends React.Component {


  render() {
    return (
      <div class="testPageContainer">

        <h1 class="welcomeScetionPlaceHolder">TEST TEST TEST</h1>
        <VitalStats/>
        <h1 class="welcomeScetionPlaceHolder">Your test page will load here</h1>
      </div>

    );
  }
}
