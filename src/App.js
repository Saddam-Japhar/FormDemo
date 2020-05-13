import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import scheduleTargetRequest from "./schedulTargetRequest";

class App extends React.Component {
  render() {
    let links = [
      { label1: "Schedule Targetting Request", link: "/SDT" },
      { label1: "Do Targetting Request", link: "/DTR" },
    ];
    return (
      <BrowserRouter>
        <Navigation links={links} />
        <switch>
          <Route path="/SDT" component={scheduleTargetRequest} />
          {/* <Route path="/DTR" component={doTargetRequest} /> */}
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
