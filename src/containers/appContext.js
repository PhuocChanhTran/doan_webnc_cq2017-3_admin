import { createContext } from 'react';

const defaultValue = {
    learner:[],
    lecture:[],
    disableLecture:[],
    course:[],
    category:[]
};
const appContext = createContext(defaultValue);

export default appContext;