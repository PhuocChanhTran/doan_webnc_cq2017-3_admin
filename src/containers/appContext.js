import { createContext } from 'react';

const defaultValue = {
    learner:[],
    lecture:[],
    disableLecture:[],
    disableLearner:[],
    course:[],
    category:[]
};
const appContext = createContext(defaultValue);

export default appContext;