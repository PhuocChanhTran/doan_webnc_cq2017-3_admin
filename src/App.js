import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LearnerPage from "./containers/LearnerPage/LearnerPage";
import CoursePage from "./containers/CoursePage/CoursePage";
import LecturePage from "./containers/LecturePage/LecturePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LearnerPage />
        </Route>
        <Route exact path="/lecture">
          <LecturePage />
        </Route>
        <Route exact path="/course">
          <CoursePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
