import { BrowserRouter as Router} from 'react-router-dom';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers/index'
import App from './components/App/App'

const store = createStore(rootReducer)

render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
