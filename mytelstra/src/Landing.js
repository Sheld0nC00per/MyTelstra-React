/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoNavbar from "components/Navbars/demoNavbar";

function Landing() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <DemoNavbar authenticated = {false}/>
      <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/dashboard" exact component={Home}/>
          <Route path="/mobile/plans" exact component={ViewMobilePlans}/>
          <Route path="/mobile/activeplans" exact component={ViewActiveMobilePlans}/>
          <Route path="/mobile/rechargehistory/:id" component={ViewTransactionHistory}/>
        </Switch>
      </div>
    </Router>
      <LandingPageHeader />
    </>
  );
}

export default Landing;
