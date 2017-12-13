import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";



import Layout from "./components/Layout";
import LoginPage from "./components/landingPage/LoginPage";
import Dashboard from "./components/dashboard/DashboardMain";


const app = document.getElementById('app');





ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={LoginPage}></Route>
    <Route path="dashboard" name="dashboard" component={Dashboard}></Route>
  </Router>




  , app);
