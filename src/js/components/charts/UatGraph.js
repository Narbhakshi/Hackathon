import React from "react";
import ImplChart from "./ImplChart";

export default class UatGraph extends React.Component {
  constructor(){
    super();
    this.state = {
      "dataPoints":[
        {  y: 5, legendText:"OSG 43%", indexLabel: "High" },
        {  y: 17, legendText:"UXF 30%", indexLabel: "Critical" },
        {  y: 56, legendText:"AEM 12%", indexLabel: "Medium" },
        {  y: 20, legendText:"Omni 7%", indexLabel: "Low" },
        {  y: 2, legendText:"Backend 10%", indexLabel: "Blockers" }
      ]
    }
  }
  render() {
    return (
      <div class="testChartPageContainer">
      <ImplChart  type="doughnut" animationEnabled="true" titleText="UAT defect classification based on competency" dataPoints={this.state.dataPoints}/>
      </div>
    );
  }
}
