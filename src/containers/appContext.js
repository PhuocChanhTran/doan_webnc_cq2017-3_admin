import { createContext } from 'react';

const defaultValue = {
    learner:[],
    lecture:[],
    course:[],
    category:[]
};
const appContext = createContext(defaultValue);

export default appContext;