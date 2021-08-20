import React, { useContext } from "react";
import appContext from "../../appContext";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

import { delUser, disableUser } from "../../../services/app.service";

export default function Lecture(props) {
  const { store, dispatch } = useContext(appContext);
  const history = useHistory();

  // console.log('store.initlearner iss');
  // console.log(store.learner)
  const btnDel_Click = async function (user_id) {
    const res = await delUser(user_id);
    console.log(user_id);

    if (res.status === 200) {
      dispatch({
        type: "delLecture",
        payload: {
          user_id,
        },
      });
    }
  };
  const btnDisable_Click = async function (user_id) {
    const res = await disableUser(user_id);
    console.log(user_id);

    if (res.status === 200) {
      dispatch({
        type: "disableLecture",
        payload: {
          user_id,
        },
      });
    }
  };
  const btnAdd_Click = function () {
    history.push("/add-lecture");
  };
  const btnListDisable_Click = function () {
    history.push("/disable-lecture");
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-primary "
                      onClick={btnAdd_Click}
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary disablebtn"
                      onClick={btnListDisable_Click}
                    >
                      DisableList
                    </button>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">LectureAccount</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">DoB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.lecture?store.lecture.map((item) => (
                      <tr>
                        <th scope="row">{item.user_id}</th>
                        <td>{item.user_username}</td>
                        <td>{item.user_name}</td>
                        <td>{item.user_email}</td>
                        <td>{item.user_dob}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => btnDisable_Click(item.user_id)}
                          >
                            Disable
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => btnDel_Click(item.user_id)}
                          >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </td>
                      </tr>
                    )):""}
                    ;
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer text-center">
        All Rights Reserved by Matrix-admin. Designed and Developed by{" "}
        <a href="https://www.wrappixel.com">WrapPixel</a>.
      </footer>
    </div>
  );
}
