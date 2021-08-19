import React, { useEffect, useReducer } from "react";

import "../../App.css";

import appReducer from "../appReducer";
import appContext from "../appContext";

import { getAllCategory } from "../../services/app.service";

import Header from "../Header";
import LeftSide from "../LeftSide";
import EditCategory from "./Components/EditCategory";


export default function EditCategoryPage(props) {
  const initialAppState = {
    category: [],
  };

  const [store, dispatch] = useReducer(appReducer, initialAppState);
  useEffect(function () {
    async function loadAllCategory() {
      const res = await getAllCategory();
      // console.log('list learner');
      // console.log(res.data);
      if (res.status === 200) {
        dispatch({
          type: "initCategory",
          payload: {
            category: res.data,
          },
        });
      }
      if (res.status === 204) {
        dispatch({
          type: "initCategory",
          payload: {
            category: null,
          },
        });
      }
    }
    loadAllCategory();
  }, []);
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
            <EditCategory/>
          </div>
        </div>
      </appContext.Provider>
    </div>
  );
}
