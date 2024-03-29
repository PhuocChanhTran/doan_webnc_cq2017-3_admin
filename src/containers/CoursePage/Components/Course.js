import React, { useContext,useState, useEffect } from "react";

import appContext from "../../appContext";
import { delCourse,disableCourse} from "../../../services/app.service";
import { FormSelect, Row} from 'react-bootstrap'
import Swal from "sweetalert2";

export default function Course(props) {
  const { store, dispatch } = useContext(appContext);
  const link = "http://localhost:3000/courses/";
  console.log("store.course iss");
  console.log(store.course);
  const btnDel_Click = async function (course_id) {
    const res = await delCourse(course_id);
    if (res.status === 200) {
      dispatch({
        type: "delCourse",
        payload: {
          course_id,
        },
      });
    }
  };
  const btnDisable_Click = async function (course_id) {
    
    Swal.fire({
      title: 'Do you want to disable this course?',
      showCancelButton: true,
      confirmButtonText: `Disable`,
    }).then(async(result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const res = await disableCourse(course_id);
        if (res.status === 200) {
          dispatch({
            type: "disableCourse",
            payload: {
              course_id,
            },
          });
        }
        Swal.fire('Disable!', '', 'success')
      }
    })
  };
  const [courseFilter,setCourseFilter] = useState({filterType: "default"});
  useEffect(function(){
    console.log(courseFilter);
    dispatch({
        type: 'courseFilter',
        payload:{
            ...courseFilter
        }
    })
  },[courseFilter])
  const handleCourseFilterChange = (e)=> {
    console.log(e.target.value);
    // setSearchFilter((prevState)=>({
    //     ...prevState,
    //     ["categoryId"]:e.target.value
    // }));
    setCourseFilter({
        ...courseFilter,
        ["filterType"]:e.target.value
    });
  }
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
              <span><FormSelect onChange={(e)=>handleCourseFilterChange(e)} defaultValue="default" style={{width:"150px"}}>
                  <option value="default">Default</option>
                  <option value="byCategory">Sort by Category</option>
                  <option value="byLecturer">Sort by Lecturer</option>
                </FormSelect></span>
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
            {store.course.map((item) => item.course_isdisable ===0?(
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="el-card-item">
                    <div className="el-card-avatar el-overlay-1">
                      {" "}
                      {/* <img src="../../assets/images/big/img1.jpg" alt="user" /> */}
                      {/* <img src="http://localhost:3000/img/courses/1" alt="user" /> */}
                      <img
                        style = {{width:"400px",height:"200px"}}
                        src={`http://localhost:3001/uploads/images/${item.course_image}`}
                        alt="user"
                      />
                      <div className="el-overlay">
                        <ul className="list-style-none el-info">
                          <li className="el-item">
                            <a
                              className="btn default btn-outline image-popup-vertical-fit el-link"
                              // href={`http://localhost:3001/uploads/images/${item.course_image}`}
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
                      <h6 className="text-muted">
                        Lecturer: {item.user_name}
                      </h6>
                      <h6 className="text-muted">
                        Category: {item.category_name}
                      </h6>
                      <br />
                      <div class="d-flex  justify-content-center">
                        <a
                          name=""
                          id=""
                          className="btn btn-primary  border"
                          href={link + item.course_id}
                          role="button"
                        >
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>

                        <button
                          type="button"
                          className="btn btn-primary border"
                          onClick={() => btnDel_Click(item.course_id)}
                        >
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary border"
                          onClick={() => btnDisable_Click(item.course_id)}
                        >
                          Disable
                          {/* <i class="fa fa-trash" aria-hidden="true"></i> */}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ):'')}
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
