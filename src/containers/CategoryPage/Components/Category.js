import React, { useContext } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

import appContext from "../../appContext";
import { deleteCategory,getNumberCourseOfCategory } from "../../../services/app.service";

export default function Category(props) {
  const { store, dispatch } = useContext(appContext);
  console.log('store o category page la');
  console.log(store);
  console.log('store o category page la');

  const history = useHistory();
  const btnDel_Click = async function (category_id) {
    const res = await deleteCategory(category_id);
    if (res.status === 200) {
      dispatch({
        type: "delCategory",
        payload: {
          category_id,
        },
      });
    }
  };
  const btnEdit_Click = async function (item) {
    localStorage.setItem('myData', {
      "a":1})
    history.push(`/edit-category?id=${item.category_id}`)
  };
  const numberCourseOfCategory = async function () {
    const res = await getNumberCourseOfCategory();
    // return res.NumberOfCourse;
    return 10;
  };
  const btnAdd_Click = function () {
    history.push("/add-category");
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
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">CategoryName</th>
                      <th scope="col">Number Of Courses</th>
                      <th scope="col">Subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.category.map((item) => (
                      <tr>
                        <th scope="row">{item.category_id}</th>
                        <td>{item.category_name}</td>
                        <td>2</td>
                        <td>{item.subject_id}</td>
                        <td>
                          <button
                            type="button"
                            class="btn"
                            onClick={() => btnEdit_Click(item)}
                          >
                            <i class="fas fa-edit "></i>
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => btnDel_Click(item.category_id)}
                          >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </td>
                        {/* {2>1 ? (<td>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => btnDel_Click(item.user_id)}
                          >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </td>):''} */}
                        
                      </tr>
                    ))}
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
