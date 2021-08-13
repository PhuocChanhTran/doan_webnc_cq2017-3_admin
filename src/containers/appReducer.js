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
      case 'initCourse':
        return {
          ...state,
          course: action.payload.course,
        }
      case 'delLearner':{
        console.log("case delLearner");
        return {
          ...state,
          learner:state.learner.filter(el=>el.user_id != action.payload.user_id )
        }
      }
      case 'delLecture':{
        console.log("case delLecture");
        return {
          ...state,
          lecture:state.lecture.filter(el=>el.user_id != action.payload.user_id )
        }
      }
      case 'delCourse':{
        console.log("case delCourse");
        return {
          ...state,
          course:state.course.filter(el=>el.course_id != action.payload.course_id )
        }
      }
      default:
        return state;
    }
  }