import React, { useContext } from "react";
import appContext from "../../appContext";

import {BrowserRouter as Router,Link} from "react-router-dom";

export default function Lecture(props) {
  const { store } = useContext(appContext);
  // console.log('store.initlearner iss');
  // console.log(store.learner)

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
                  <h5 className="card-title mb-0">Static Table</h5>
                  {/* <Link className="d-flex justify-content-between" to="/">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    Add
                    </Link> */}
                  <Link to="/">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    Add
                    </Link>

                  {/* <a class="btn btn-default" href="https://www.google.com/" role="button">
                    Add
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </a> */}
                  </Router>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">DoB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.lecture.map((item) => (
                      <tr>
                        <th scope="row">{item.user_id}</th>
                        <td>{item.user_name}</td>
                        <td>{item.user_email}</td>
                        <td>{item.user_dob}</td>
                        <td>
                               <button type="button" class="btn btn-primary">
                                  <i class="fa fa-trash" aria-hidden="true" ></i>
                               </button>
                             </td>
                      </tr>
                    ))}
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
