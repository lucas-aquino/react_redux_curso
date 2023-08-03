import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './features/reducers'
import { asyncMiddleware } from './middlewares/async'
import App from './App.jsx'
import './index.css'

const store = createStore(reducer, applyMiddleware(asyncMiddleware))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
