import axios from "../utils/axios";
export function getAllCourse() {
  return axios.get("/courses");
}
export function getDisableAllCourse() {
  return axios.get("/courses/disable");
}

export function getCourseSingleCourse(courseId) {
  return axios.get(`/courses/${courseId}`);
}
export function getCategoryById(category_id) {
  return axios.get(`/category/${category_id}`);
}
/*  */
export function getAllLearner() {
  return axios.get(`/users/all-learner`);
}

export function getAllLecture() {
  return axios.get(`/users/all-lecture`);
}
export function getAllCategory() {
  return axios.get(`/category/all`);
}
export function delUser(user_id) {
  console.log("vao delete user service");
  return axios.delete(`/users/delete-user`, {
    data: {
      user_id: user_id,
    },
  });
}
export function delCourse(course_id) {
  return axios.delete(`/courses/delete`, {
    data: {
      course_id: course_id,
    },
  });
}
export function registerAccount(user) {
  return axios.post("/auth/lecturer-register", {
    user_username: user.username,
    user_password: user.password,
    user_name: user.fullname,
    user_firstname: user.firstname,
    user_lastname: user.lastname,
    user_email: user.email,
    // user_dob: user.dob
  });
}
export function addCategory(category) {
  return axios.post("/category/add", {
    category_name: category.category_name,
    subject_id: category.subject_id,
  });
}
export function disableUser(userId){
  return axios.patch("/users/disable", {
    userId: userId,
  });
}
export function disableCourse(course_id){
  return axios.patch("/courses/disable", {
    course_id: course_id,
  });
}
export function unDisableCourse(course_id){
  return axios.patch("/courses/undisable", {
    course_id: course_id,
  });
}
export function unDisableUser(userId){
  return axios.patch("/users/undisable", {
    userId: userId,
  });
}
export function editCategory(catId,cateName){
  return axios.patch(`/category/${catId}`,{
    categoryName: cateName
  });
}
export function getDisableLecture(){
  return axios.get("/users/all-disable-lecture");
}
export function getDisableLearner(){
  return axios.get("/users/all-disable-learner");
}
export function getNumberCourseOfCategory(category_id){
  return axios.get(`courses/total/category/${category_id}`);
}
export function deleteCategory(category_id) {
  return axios.delete(`/category/delete`, {
    data: {
      category_id: category_id,
    },
  });
}

export function adminLogin(username, password){
  return axios.post("/auth/admin/login",{
    username,password
  })
}

export function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export function sortCourseByCategoryFunction(a, b) {
  if (a.category_id === b.category_id) {
      return 0;
  }
  else {
      return (a.category_id > b.category_id) ? -1 : 1;
  }
}

export function sortCourseByLecturerFunction(a, b) {
  if (a.user_id === b.user_id) {
    return 0;
  }
  else {
      return (a.user_id > b.user_id) ? -1 : 1;
  }
}
