import React from "react";


export default class ImplChart extends React.Component {
  constructor(){
    super();
    this.state ={
      "title":"",
      "type":"bar",
      "dataPoints":null,
      "animationEnabled":true
    };
  }

  componentDidMount() {
      const chartDataDynamic = {
                title:{
                    text:this.props.titleText
                },
                animationEnabled: this.props.animationEnabled,
                data: [{
                    type: this.props.type,
                    dataPoints: this.props.dataPoints
                }]
            };
      const chart = new CanvasJS.Chart("chartContainer", chartDataDynamic);
      // debugger;
      console.log(chart);
      chart.render();
}
  render() {
    return (
      <div class="chartContainers" id="chartContainers">
        <div class="chartContainer" id="chartContainer"></div>
      </div>
    );
  }
}
