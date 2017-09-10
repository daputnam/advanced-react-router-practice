import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import Settings from "./components/Settings";
import Wall from "./components/Wall";
import Profiles from "./components/Profiles";
import Profile from "./components/Profile";
import Marquee from "./components/Marquee";
import Dashboard from "./components/Dashboard";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{ backgroundColor: "white" }}>
          {/* PUT YOUR ROUTES HERE */}
          <BrowserRouter>
            <div>
              <Switch>
                {/* <Route path="/users" render={(props) => {
                  return (
                    <div>
                      <SearchBoxContainer />
                      <ListOfUsersContainer />
                    </div>
                  );
                }} /> */}
                <Route path="/charts" component={Charts} />
                <Route path="/tables" component={Tables} />
                <Route path="/settings" component={Settings} />
                <Route path="/wall" component={Wall} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/marquee/:text" component={Marquee} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/" component={Dashboard} />
              </Switch>
            </div>
          </BrowserRouter>

        </div>
      </div>
    </div>

  );
}


export default App;