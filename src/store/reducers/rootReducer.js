import { combineReducers } from 'redux';
import partnersReducer from './partnersReducer';
import thanksReducer from './thanksReducer';

export default combineReducers({
  partnersReducer,
  thanksReducer,
});
