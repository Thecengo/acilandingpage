import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Kurumsal from "components/Headers/Kurumsal";
import Uploader from "components/Uploader";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
       <Route
        path="/upload"
        component = {Uploader}
      />
      <Route
        path="/landing-page"
        component={LandingPage}/>
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
       <Route
        path="/Kurumsal"
        component={Kurumsal}/>
      
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
