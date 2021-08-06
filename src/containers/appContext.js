import { createContext } from 'react';

const defaultValue = {
    learner:[],
    lecture:[],
    course:[],
};
const appContext = createContext(defaultValue);

export default appContext;