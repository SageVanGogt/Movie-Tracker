import { BrowserRouter as Router} from 'react-router-dom';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers/index'
import App from './containers/App/App'
import './index.css'
import { loadState, saveState } from './localStorage';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const persistedState = loadState();
const store = createStore(rootReducer, persistedState, devTools);
store.subscribe(() => {
  saveState(store.getState())
});

render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)


