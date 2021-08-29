import React, { useContext } from "react";
import appContext from "../../appContext";
import { delUser,unDisableUser } from "../../../services/app.service";

import { BrowserRouter as Router, Link,useHistory } from "react-router-dom";

export default function DisableLecture(props) {
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
  const btnUnDisable_Click = async function (user_id) {
    const res = await unDisableUser(user_id);
    console.log(user_id);

    if (res.status === 200) {
      dispatch({
        type: "unDisableLearner",
        payload: {
          user_id,
        },
      });
    }
  };
  const btnBack_Click = function()
  {
    history.push("/")
  }

  return (
    <div>
      <div className="page-wrapper">
        <div className="container-fluid">
          {/* ============================================================== */}
          {/* Start Page Content */}
          {/* ============================================================== */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Router>
                    <button
                            type="button"
                            className="btn btn-primary disablebtn"
                            onClick={btnBack_Click}
                            fab
                          >
                            <i className="fa fa-backward" aria-hidden="true"></i>
                          </button>
                  </Router>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">LearnerAccount</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">DoB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.disableLearner && store.disableLearner.length !== 0?store.disableLearner.map((item) => (
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
                            onClick={() => btnUnDisable_Click(item.user_id)}
                          >
                            Undisable
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
                    )):''}
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
