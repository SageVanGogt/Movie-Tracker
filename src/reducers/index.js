import { combineReducers } from 'redux';
import addFilmsReducer from './addFilmsReducer';
import updateStoreUserReducer from './updateStoreUserReducer'
import addFavoritesReducer from './addFavoritesReducer'

const rootReducer = combineReducers({
  films: addFilmsReducer,
  user: updateStoreUserReducer,
  favorites: addFavoritesReducer
})

export default rootReducer