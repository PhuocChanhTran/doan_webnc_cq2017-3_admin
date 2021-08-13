import axios from "../utils/axios";
export function getAllCourse() {
    return axios.get('/courses');
}
  
export function getCourseSingleCourse(courseId){
    return axios.get(`/courses/${courseId}`);
}
/*  */
export function getAllLearner(){
    return axios.get(`/users/all-learner`);
}

export function getAllLecture(){
    return axios.get(`/users/all-lecture`);
}
export function delUser(user_id){
    console.log('vao delete user service');
    return axios.delete(`/users/delete-user`,{data:{
        user_id: user_id
    }});
}
export function delCourse(course_id){
    return axios.delete(`/courses/delete`,{data:{
        course_id: course_id
    }});
}


