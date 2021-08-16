import React from "react";
import { useHistory } from "react-router-dom";

export default function LeftSide(props) {
  const history = useHistory();
  const lectureBtn_Click = function () {
    history.push("/lecture");
  };
  const learnerBtn_Click = function () {
    history.push("/");
  };
  const courseBtn_Click = function () {
    history.push("/course");
  };
  const categoryBtn_Click = function () {
    history.push("/category");
  };
  return (
    <div>
      <aside className="left-sidebar" data-sidebarbg="skin5">
        {/* Sidebar scroll*/}
        <div className="scroll-sidebar">
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="pt-4">
              <li className="sidebar-item">
                <button
                  className="sidebar-link waves-effect waves-dark sidebar-link  button-custom"
                  onClick={lectureBtn_Click}
                  aria-expanded="false"
                >
                  <i className="mdi mdi-view-dashboard" />
                  <span className="hide-menu">Lecture</span>
                </button>
              </li>
              <li className="sidebar-item">
                <button
                  className="sidebar-link waves-effect waves-dark sidebar-link  button-custom"
                  onClick={learnerBtn_Click}
                  aria-expanded="false"
                >
                  <i className="mdi mdi-view-dashboard" />
                  <span className="hide-menu">Learner</span>
                </button>
              </li>
              <li className="sidebar-item">
                <button
                  className="sidebar-link waves-effect waves-dark sidebar-link  button-custom"
                  onClick={courseBtn_Click}
                  aria-expanded="false"
                >
                  <i className="mdi mdi-view-dashboard" />
                  <span className="hide-menu">Course</span>
                </button>
              </li>
              <li className="sidebar-item">
                <button
                  className="sidebar-link waves-effect waves-dark sidebar-link  button-custom"
                  onClick={categoryBtn_Click}
                  aria-expanded="false"
                >
                  <i className="mdi mdi-view-dashboard" />
                  <span className="hide-menu">Category</span>
                </button>
              </li>
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
    </div>
  );
}
