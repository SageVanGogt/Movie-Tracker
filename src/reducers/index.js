import { combineReducers } from 'redux';
import addFilmsReducer from './addFilmsReducer';
import updateStoreUserReducer from './updateStoreUserReducer';
import addFavoritesReducer from './addFavoritesReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  films: addFilmsReducer,
  user: updateStoreUserReducer,
  favorites: addFavoritesReducer,
  error: errorReducer
});

export default rootReducer;