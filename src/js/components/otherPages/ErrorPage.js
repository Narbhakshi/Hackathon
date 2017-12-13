import React from "react";


export default class ErrorPage extends React.Component {
  constructor(){
    super();

  }


  render() {
    return (
      <div class="page-container errorPage page-container-responsive">
        <div class="row space-top-8 space-8 row-table">
            <div class="col-5 col-middle">
              <h1 class="oopsText">Oops!</h1>
              <h2>We can't seem to find the page you're looking for.</h2>
              <h6>Error code: 404</h6>
              <ul class="list-unstyled">
                <li>Here are some helpful links instead:</li>
                <li><a href="/">Login Page</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/testChart">Test Chart</a></li>
              </ul>
            </div>
            <div class="col-5 col-middle text-center">
              <img src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
              width="313" height="428" alt="Girl has dropped her ice cream."></img>
            </div>
          </div>
        </div>
    );
  }
}
