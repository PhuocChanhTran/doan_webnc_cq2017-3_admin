import axios from "../utils/axios";
export function getAllCourse() {
  return axios.get("/courses");
}

export function getCourseSingleCourse(courseId) {
  return axios.get(`/courses/${courseId}`);
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
export function getDisableLecture(){
  return axios.get("/users/all-disable-lecture");
}