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
      default:
        return state;
    }
  }