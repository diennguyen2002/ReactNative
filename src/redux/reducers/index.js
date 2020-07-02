import {combineReducers} from 'redux';

import filterModeReducer from './filterModeReducer';
import shouldshowformReducer from './shouldshowformReducer';
import wordReducer from './wordReducer';

const reducers = combineReducers({
  words: wordReducer,
  shouldshowform: shouldshowformReducer,
  filterMode: filterModeReducer,
});

export default reducers;
