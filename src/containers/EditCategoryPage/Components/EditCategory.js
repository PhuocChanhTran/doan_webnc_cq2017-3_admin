import React, { useEffect, useState ,useReducer,useContext } from "react";
import appContext from "../../appContext";
import { useForm } from "react-hook-form";



import {useLocation} from 'react-router-dom';
import queryString from "query-string";


import { useHistory, NavLink } from "react-router-dom";
import { addCategory,getCategoryById,editCategory} from "../../../services/app.service";
import Swal from "sweetalert2";
function EditCategory() {
  const [isEdit,setIsEdit] = useState(false);
  const { store, dispatch } = useContext(appContext);
  // console.log('store learner lafyyyyyy:')
  // console.log(store.category);
  // console.log('store learner lafyyyyyyyyyyy:')
  


  const history = useHistory();
  const {search} = useLocation();

  const {id}=queryString.parse(search);
  // console.log('store category abchjk');
  // console.log(store.category)
  // console.log('store categoryabchjk');
  let result = store.category.filter(obj => {
    return obj.category_id == id
  })
  // var result = store.category.filter(obj => {
  //   return obj.category_id == id
  // })
  useEffect(function(){
    if(isEdit===true){
      result = store.category.filter(obj => {
        return obj.category_id == id
      })
    }
    setIsEdit(false)
  },[isEdit,setIsEdit])
  // console.log('type of result');
  // console.log(typeof(result));

  console.log('result');
  // console.log(result[0].category_name);
  console.log(result);
  console.log('result');
  
  console.log('loc ket qua');
  
  const { register, handleSubmit } = useForm();
  const onSubmit = async function (data) {
    console.log("category of sm",data); 
    try {
      setIsEdit(true);
      const res = await editCategory(id,data.category_name);
      console.log(res.data);
      if (res.status !== 200) {
        Swal.fire({
          title: "Edit Category Fail!!!",
          icon: "error",
          text: `${res.data.message}`,
          confirmButtonText: "OK",
        });
      }
      if (res.status === 200) {
        Swal.fire({
          title: "Edit Category Success.",
          icon:"success"
        }).then((result) => {
          // /* Read more about isConfirmed, isDenied below */
          // if (result.isConfirmed) {
          // 	localStorage.usernameVerify = user.username;
          // 	// history.push('/verify');
          // }
        });
        history.push('/category')
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
                    Edit Category
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
                        Category ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputRegisterForm-username"
                        //  placeholder="nguyenvana"
                        //  placeholder={cat[0].category_name}

                         defaultValue = {result[0]?result[0].category_id:""}
                        //  placeholder={store.cate.category_name}
                       readOnly
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputRegisterForm-username">
                        Category Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputRegisterForm-username"
                        //  placeholder="nguyenvana"
                        //  placeholder={cat[0].category_name}

                         defaultValue = {result[0]?result[0].category_name:""}
                        //  placeholder={store.cate.category_name}
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
                        // defaultValue = {result[0]?result[0].subject_id:""}
                        defaultValue = {result[0]?result[0].subject_id:""}
                        // placeholder={result[0].category_name}
                        //  placeholder={store.cate.category_na
                        readOnly
                      ></input>
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="inputRegisterForm-username">
                        SubjectID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputRegisterForm-fullname"
                        defaultValue = {result[0]?result[0].subject_id:""}
                        // placeholder={result[0].category_name}
                        //  placeholder={store.cate.category_na
                        {...register("subject_id")}
                        required
                      ></input>
                    </div> */}
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
                        Edit{" "}
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
export default EditCategory;
