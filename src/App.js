import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LearnerPage from "./containers/LearnerPage/LearnerPage";
import CoursePage from "./containers/CoursePage/CoursePage";
import LecturePage from "./containers/LecturePage/LecturePage";
import AddLecturePage from "./containers/AddLecturePage/AddLecturePage";
import CategoryPage from "./containers/CategoryPage/CategoryPage";
import AddCategoryPage from "./containers/AddCategoryPage/AddCategoryPage";
import EditCategoryPage from "./containers/EditCategoryPage/EditCategoryPage";
import DisableLecturePage from "./containers/DisableLecturePage/DisableLecturePage";
import DisableLearnerPage from "./containers/DisableLearnerPage/DisableLearnerPage";
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
        <Route exact path="/add-category">
          <AddCategoryPage/>
        </Route>
        <Route  path="/edit-category">
          <EditCategoryPage/>
        </Route>
        <Route exact path="/disable-lecture">
          <DisableLecturePage/>
        </Route>
        <Route exact path="/disable-learner">
          <DisableLearnerPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
