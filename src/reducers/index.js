import { combineReducers } from 'redux';
import addFilmsReducer from './addFilmsReducer';
import updateStoreUserReducer from './updateStoreUserReducer'

const rootReducer = combineReducers({
  films: addFilmsReducer,
  user: updateStoreUserReducer
})

export default rootReducer