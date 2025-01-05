import {combineReducers} from 'redux';
import films from './movieReducer';

// declare all reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer