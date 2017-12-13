import React from "react";
import ImplChart from "./ImplChart";



export default class TestChartPage extends React.Component {
  constructor(){
    super();
    this.state = {
      "dataPoints":[
        {y: 5, label: "Sweden"  },
        {y: 6, label: "Taiwan"  },
        {y: 7, label: "Russia"  },
        {y: 8, label: "Spain"  },
        {y: 8, label: "Brazil"  },
        {y: 8, label: "India"  }
      ]
    }
  }


  render() {
    return (
      <div class="testChartPageContainer">
        <ImplChart  type="bar" animationEnabled="true" titleText="Fortune Global 500 Companies by National" dataPoints={this.state.dataPoints}/>
      </div>


    );
  }
}
