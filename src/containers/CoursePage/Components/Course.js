import React, { useContext } from "react";
import appContext from "../../appContext";
import { delCourse } from "../../../services/app.service";

export default function Course(props) {
  const { store, dispatch } = useContext(appContext);
  console.log("store.course iss");
  console.log(store.course);
  const btnDel_Click = async function (course_id) {
    const res = await delCourse(course_id);
    console.log("userid sau khi xoa la:");
    console.log(course_id);

    if (res.status === 200) {
      dispatch({
        type: "delCourse",
        payload: {
          course_id,
        },
      });
    }
  };

  return (
    <div>
      <div className="page-wrapper">
        {/* ============================================================== */}
        {/* Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-12 d-flex no-block align-items-center">
              <h4 className="page-title">Full Width</h4>
              <div className="ms-auto text-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* End Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Container fluid  */}
        {/* ============================================================== */}
        <div className="container-fluid">
          {/* ============================================================== */}
          {/* Start Page Content */}
          {/* ============================================================== */}
          <div className="row el-element-overlay">
            {store.course.map((item) => (
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="el-card-item">
                    <div className="el-card-avatar el-overlay-1">
                      {" "}
                      {/* <img src="../../assets/images/big/img1.jpg" alt="user" /> */}
                      {/* <img src="http://localhost:3000/img/courses/1" alt="user" /> */}
                      <img
                        src="https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"
                        alt="user"
                      />
                      <div className="el-overlay">
                        <ul className="list-style-none el-info">
                          <li className="el-item">
                            <a
                              className="btn default btn-outline image-popup-vertical-fit el-link"
                              href="../../assets/images/big/img1.jpg"
                            >
                              <i className="mdi mdi-magnify-plus" />
                            </a>
                          </li>
                          <li className="el-item">
                            <a
                              className="btn default btn-outline el-link"
                              href="javascript:void(0);"
                            >
                              <i className="mdi mdi-link" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="el-card-content">
                      <h4 className="mb-0">{item.course_name}</h4>{" "}
                      <span className="text-muted">
                        {item.course_shortdescription}
                      </span>
                      <br />
                      <button
                            type="button"
                            class="btn btn-primary"
                            onClick={()=>btnDel_Click(item.course_id)}
                          >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </button>

                      {/* <i class="fa fa-trash" aria-hidden="true"></i> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ============================================================== */}
          {/* End PAge Content */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Right sidebar */}
          {/* ============================================================== */}
          {/* .right-sidebar */}
          {/* ============================================================== */}
          {/* End Right sidebar */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* End Container fluid  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* footer */}
        {/* ============================================================== */}
        <footer className="footer text-center">
          All Rights Reserved by Matrix-admin. Designed and Developed by{" "}
          <a href="https://www.wrappixel.com">WrapPixel</a>.
        </footer>
        {/* ============================================================== */}
        {/* End footer */}
        {/* ============================================================== */}
      </div>
    </div>
  );
}
