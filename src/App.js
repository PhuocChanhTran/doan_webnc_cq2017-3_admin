import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LearnerPage from "./containers/LearnerPage/LearnerPage";
import CoursePage from "./containers/CoursePage/CoursePage";
import LecturePage from "./containers/LecturePage/LecturePage";
import AddLecturePage from "./containers/AddLecturePage/AddLecturePage";
import CategoryPage from "./containers/CategoryPage/CategoryPage";
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
        <Route exact path="/add-lecture">
          <AddLecturePage />
        </Route>
        <Route exact path="/category">
          <CategoryPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
