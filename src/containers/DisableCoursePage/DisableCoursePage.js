import React, { useEffect, useReducer } from "react";

import "../../App.css";

import appReducer from "../appReducer";
import appContext from "../appContext";

import { getDisableAllCourse } from "../../services/app.service";

import Header from "../Header";
import LeftSide from "../LeftSide";
import DisableCourse from "./Components/DisableCourse";


export default function DisableCoursePage(props) {
  const initialAppState = {
    backupCourse:[],
    disableCourse: [],
  };

  const [store, dispatch] = useReducer(appReducer, initialAppState);
  useEffect(function () {
    async function loadAllDisableCourse() {
      const res = await getDisableAllCourse();
      // console.log('list learner');
      // console.log(res.data);
      if (res.status === 200) {
        dispatch({
          type: "initDisableCourse",
          payload: {
            disableCourse: res.data.result,
          },
        });
      }
      if (res.status === 204) {
        dispatch({
          type: "initDisableCourse",
          payload: {
            disableCourse: null,
          },
        });
      }
    }
    loadAllDisableCourse();
  }, []);

  return (
    <div>
      <appContext.Provider value={{ store, dispatch }}>
        <div>
          {/* ============================================================== */}
          {/* Preloader - style you can find in spinners.css */}
          {/* ============================================================== */}
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
            <DisableCourse/>
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
