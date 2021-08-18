import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, NavLink } from "react-router-dom";
import { addCategory } from "../../../services/app.service";
import Swal from "sweetalert2";
function AddCategory() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = async function (category) {
    console.log("category of sm");
    console.log(category);
    try {
      const res = await addCategory(category);
      console.log(res.data);
      if (res.status !== 200) {
        Swal.fire({
          title: "Add Category Fail!!!",
          icon: "error",
          text: `${res.data.message}`,
          confirmButtonText: "OK",
        });
      }
      if (res.status === 200) {
        Swal.fire({
          title: "Add Category Success.",
          showCancelButton: true,
          confirmButtonText: `OK`,
        }).then((result) => {
          // /* Read more about isConfirmed, isDenied below */
          // if (result.isConfirmed) {
          // 	localStorage.usernameVerify = user.username;
          // 	// history.push('/verify');
          // }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="page-wrapper">
      <div className="login-page-content">
        <div className="sign-up-content-page">
          <div className="container custom-max-width-container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 wow fadeInUp column-top-login">
                <div className="main-box-top-title">
                  <h1 className="title-main-page font-48 text-center">
                    New Category
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 wow fadeInUp column-top-login form-bistkey">
                <div className="form-subscribe float-none margin-top-50">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="inputRegisterForm-username">
                        Category Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputRegisterForm-username"
                        // placeholder="nguyenvana"
                        {...register("category_name")}
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputRegisterForm-username">
                        SubjectID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputRegisterForm-fullname"
                        // placeholder="Nguyen Van A"
                        {...register("subject_id")}
                        required
                      ></input>
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="inputRegisterForm-username">
                        Category Description
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputRegisterForm-firstname"
                        placeholder="Nguyen"
                        {...register("firstname")}
                        required
                      ></input>
                    </div> */}
                    <div className="login-submit margin-top-15">
                      <button className="btn sub-login full-width-btn center btn btn-primary">
                        ADD{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddCategory;
