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
                    text:this.props.titleText,
                    fontFamily: "Impact",
                    fontWeight: "normal"
                },
                legend:{
                      verticalAlign: "bottom",
                      horizontalAlign: "center"
                    },
                animationEnabled: this.props.animationEnabled,
                data: [{
                    indexLabelFontSize: 20,
                    indexLabelFontFamily: "Garamond",
                    indexLabelFontColor: "darkgrey",
                    indexLabelLineColor: "darkgrey",
                    indexLabelPlacement: "outside",
                    showInLegend: true,
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
