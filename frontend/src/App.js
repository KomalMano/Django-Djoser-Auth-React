import React, { Component } from "react";
import Root from "./Root"; // <------------- new import
import {BrowserRouter, Route, Switch } from "react-router-dom"; // <--- remove BrowserRouter
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import requireAuth from "./utils/RequireAuth";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

class App extends Component {
  render() {
    return (
      <div>
        <Root> {/* replace BrowserRouter with Root */}
        <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Home } />
            <Route path="/signup" component={Signup } />
            <Route path="/login" component={Login } />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
            <Route path="*">Ups</Route>
          </Switch>
          </BrowserRouter>
        </Root> {/* replace BrowserRouter with Root */}
        {/* // below <Root> add */}
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
      </div>
    );
  }
}

export default App;