import { createContext } from 'react';

const defaultValue = {
    learner:[],
    lecture:[],
    disableLecture:[],
    disableLearner:[],
    course:[],
    disableCourse:[],
    category:[],
};
const appContext = createContext(defaultValue);

export default appContext;