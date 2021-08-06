import axios from "../utils/axios";
export function getAllCourse() {
    return axios.get('/courses');
}
  
export function getCourseSingleCourse(courseId){
    return axios.get(`/courses/${courseId}`);
}

export function getAllLearner(){
    return axios.get(`/users/all-learner`);
}

export function getAllLecture(){
    return axios.get(`/users/all-lecture`);
}

