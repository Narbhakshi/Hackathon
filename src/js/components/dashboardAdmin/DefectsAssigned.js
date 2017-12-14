import React from "react";


export default class DefectsAssigned extends React.Component {

  render() {
    return (
      <div class= "welcomeSectionContainer">
        <h1>From Defect List Section</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Defect Id</th>
              <th scope="col">Defect Details</th>
              <th scope="col">Assigned To</th>
              <th scope="col">Assigned Time</th>
              <th scope="col">Delivered Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">21827</th>
              <td>Login not Working</td>
              <td>Shivam</td>
              <td>14th Dec</td>
              <td></td>
              <td>Critical</td>
            </tr>
            <tr>
              <th scope="row">24251</th>
              <td>Dollar sign missing</td>
              <td>Piyush</td>
              <td>14th Dec</td>
              <td></td>
              <td>Low</td>
            </tr>
            <tr>
              <th scope="row">24617</th>
              <td>Accessories missing on cart</td>
              <td>Msadils</td>
              <td>14th Dec</td>
              <td></td>
              <td>High</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
