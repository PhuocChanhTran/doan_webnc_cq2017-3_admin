import React, { useEffect, useReducer } from "react";

import "../../App.css";

import appReducer from "../appReducer";
import appContext from "../appContext";

import { getAllLearner } from "../../services/app.service";

import Header from "../Header";
import LeftSide from "../LeftSide";
import Learner from "./Components/Learner";


export default function LearnerPage(props) {
  const initialAppState = {
    learner: [],
  };

  const [store, dispatch] = useReducer(appReducer, initialAppState);
  useEffect(function () {
    async function loadAllLearner() {
      const res = await getAllLearner();
      // console.log('list learner');
      // console.log(res.data);
      if (res.status === 200) {
        dispatch({
          type: "initLearner",
          payload: {
            learner: res.data,
          },
        });
      }
      if (res.status === 204) {
        dispatch({
          type: "initLearner",
          payload: {
            learn: null,
          },
        });
      }
    }
    loadAllLearner();
  }, []);

  return (
    <div>
      <appContext.Provider value={{ store, dispatch }}>
        <div>
          {/* ============================================================== */}
          {/* Preloader - style you can find in spinners.css */}
          {/* ============================================================== */}
          <div className="preloader">
            <div className="lds-ripple">
              <div className="lds-pos" />
              <div className="lds-pos" />
            </div>
          </div>
          {/* ============================================================== */}
          {/* Main wrapper - style you can find in pages.scss */}
          {/* ============================================================== */}
          <div
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin5"
            data-sidebartype="full"
            data-sidebar-position="absolute"
            data-header-position="absolute"
            data-boxed-layout="full"
          >
            {/* ============================================================== */}
            {/* Topbar header - style you can find in pages.scss */}
            <Header />
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* End Topbar header */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Left Sidebar - style you can find in sidebar.scss  */}
            <LeftSide />
            {/* ============================================================== */}

            {/* ============================================================== */}
            {/* End Left Sidebar - style you can find in sidebar.scss  */}
            <Learner />
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Page wrapper  */}
            {/* ============================================================== */}
          </div>
        </div>
      </appContext.Provider>
    </div>
  );
}
