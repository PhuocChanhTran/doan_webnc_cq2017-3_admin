import {sortCourseByCategoryFunction,sortCourseByLecturerFunction} from '../services/app.service'
export default function appReducer(state, action) {
  console.log('action tyoe laf laf laf laf la fla ff iu  ')
  // console.log({action,state})
  console.log(action.type)
    // action = { type, payload }
    switch (action.type) {
      case 'initLearner':
        return {
          ...state,
          learner: action.payload.learner,
        }
      case 'initLecture':
        return {
          ...state,
          lecture: action.payload.lecture,
        }
      case 'initDisableLecture':
        return {
          ...state,
          disableLecture: action.payload.disableLecture,
        }
      case 'initDisableLearner':
        return {
          ...state,
          disableLearner: action.payload.disableLearner,
        }
      case 'initCourse':
        return {
          ...state,
          course: action.payload.course,
          backupCourse:  action.payload.course,
        }
      case 'courseFilter':
        let tempCourses = state.backupCourse;
        if(action.payload.filterType === "byCategory"){
          tempCourses = tempCourses.sort(sortCourseByCategoryFunction);
        }else if(action.payload.filterType === "byLecturer"){
          tempCourses = tempCourses.sort(sortCourseByLecturerFunction);
        }
        return {
          ...state,
          course: tempCourses
        }
      case 'initCategory':
        return {
          ...state,
          category: action.payload.category,
        }
      case 'delLearner':{
        console.log("case delLearner");
        return {
          ...state,
          learner:state.learner.filter(el=>el.user_id !== action.payload.user_id )
        }
      }
      case 'delLecture':{
        console.log("case delLecture");
        return {
          ...state,
          lecture:state.lecture.filter(el=>el.user_id !== action.payload.user_id )
        }
      }
      case 'delCourse':{
        console.log("case delCourse");
        return {
          ...state,
          course:state.course.filter(el=>el.course_id !==action.payload.course_id )
        }
      }
      case 'delCategory':{
        console.log("case delCategory");
        return {
          ...state,
          category:state.category.filter(el=>el.category_id !==action.payload.category_id )
        }
      }
      case 'disableLecture':{
        console.log("case disableLecture");
        return {
          ...state,
          // lecture:state.lecture.map(el=>el.user_id===action.payload.user_id ?
          //   {...el,user_isdisable:1} : el ),
          lecture:state.lecture.filter(el=>el.user_id !== action.payload.user_id)
        }
      }
      case 'disableCourse':{
        console.log("case disableCourse");
        return {
          ...state,
          course:state.course.map(el=>el.course_id===action.payload.course_id ?
            {...el,course_isdisable:1} : el ),
          

          // course:state.course.filter(el=>el.course_id !== action.payload.course_id)

        }
      }
      case 'disableLearner':{
        console.log("case disableLearner");
        return {
          ...state,
          // lecture:state.lecture.map(el=>el.user_id===action.payload.user_id ?
          //   {...el,user_isdisable:1} : el ),
          learner:state.learner.filter(el=>el.user_id !== action.payload.user_id)
        }
      }
      case 'unDisableLecture':{
        console.log("case UndisableLecture");
        return {
          ...state,
          disableLecture:state.disableLecture.filter(el=>el.user_id !== action.payload.user_id)
          
        }
      }
      case 'unDisableLearner':{
        console.log("case unDisableLearner");
        return {
          ...state,
          disableLearner:state.disableLearner.filter(el=>el.user_id !== action.payload.user_id)
          
        }
      }
      default:
        return state;
        
    }
  }