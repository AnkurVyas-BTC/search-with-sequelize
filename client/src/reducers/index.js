import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import search_hash from './searchReducer';

const rootReducer = combineReducers({
  search_hash: search_hash,
  ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;

