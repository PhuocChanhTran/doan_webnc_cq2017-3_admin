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
import DisableCoursePage from "./containers/DisableCoursePage/DisableCoursePage";

import "./App.css";
import AdminLogin from "./containers/Auth/AdminLogin";
import {LoginRoute} from "./utils/customRoute"
function App() {
  return (
    <Router>
      <Switch>
        <LoginRoute exact path="/">
          <LearnerPage />
        </LoginRoute>
        <Route exact path="/login">
          <AdminLogin />
        </Route>
        <LoginRoute exact path="/lecture">
          <LecturePage />
        </LoginRoute>
        <LoginRoute exact path="/course">
          <CoursePage />
        </LoginRoute>
        <LoginRoute exact path="/disable-course">
          <DisableCoursePage />
        </LoginRoute>
        <LoginRoute exact path="/add-lecture">
          <AddLecturePage />
        </LoginRoute>
        <LoginRoute exact path="/category">
          <CategoryPage/>
        </LoginRoute>
        <LoginRoute exact path="/add-category">
          <AddCategoryPage/>
        </LoginRoute>
        <LoginRoute  path="/edit-category">
          <EditCategoryPage/>
        </LoginRoute>
        <LoginRoute exact path="/disable-lecture">
          <DisableLecturePage/>
        </LoginRoute>
        <LoginRoute exact path="/disable-learner">
          <DisableLearnerPage/>
        </LoginRoute>
      </Switch>
    </Router>
  );
}

export default App;
