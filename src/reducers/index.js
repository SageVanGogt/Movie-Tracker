import { combineReducers } from 'redux';
import addFilmsReducer from './addFilmsReducer';

const rootReducer = combineReducers({
  films: addFilmsReducer
})

export default rootReducer