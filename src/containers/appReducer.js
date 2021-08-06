export default function appReducer(state, action) {
  console.log({action,state})
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
      default:
        return state;
    }
  }