import React, { useEffect, useReducer } from "react";

import "../../App.css";

import appReducer from "../appReducer";
import appContext from "../appContext";

// import { getAllLearner } from "../../services/app.service";

import Header from "../Header";
import LeftSide from "../LeftSide";
import AddCategory from "./Components/AddCategory";


export default function AddLecturePage(props) {
  const initialAppState = {
    category: [],
  };

  const [store, dispatch] = useReducer(appReducer, initialAppState);
  // useEffect(function () {
  //   async function loadAllLearner() {
  //     const res = await getAllLearner();
  //     // console.log('list learner');
  //     // console.log(res.data);
  //     if (res.status === 200) {
  //       dispatch({
  //         type: "initLearner",
  //         payload: {
  //           learner: res.data,
  //         },
  //       });
  //     }
  //     if (res.status === 204) {
  //       dispatch({
  //         type: "initLearner",
  //         payload: {
  //           learn: null,
  //         },
  //       });
  //     }
  //   }
  //   loadAllLearner();
  // }, []);
  console.log('Add lecturepgaee')

  return (
    <div>
      <appContext.Provider value={{ store, dispatch }}>
        <div>
          <div
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin5"
            data-sidebartype="full"
            data-sidebar-position="absolute"
            data-header-position="absolute"
            data-boxed-layout="full"
          >
            <Header />
            <LeftSide />
            <AddCategory/>
          </div>
        </div>
      </appContext.Provider>
    </div>
  );
}
