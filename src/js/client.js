import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";



import Dashboard from "./components/dashboard/DashboardMain";
import ErrorPage from "./components/otherPages/ErrorPage";
import Layout from "./components/Layout";
import LoginPage from "./components/landingPage/LoginPage";
import TestChartPage from "./components/charts/TestChartPage";


const app = document.getElementById('app');





ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={LoginPage}></Route>
    <Route path="dashboard" name="dashboard" component={Dashboard}></Route>
    <Route path="testChartPage" name="testChartPage" component={TestChartPage}></Route>
    <Route path="errorPage" name="errorPage" component={ErrorPage}></Route>
  </Router>




  , app);
