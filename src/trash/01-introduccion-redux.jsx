import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import App from './App.jsx'
import './index.css'


const store = createStore((state = 0, action) => { // es un reducer!
  //action = { type: 'tipo de accion', payload: any }

  if (action.type === 'incrementar') {
    return (state + 1)
  }

  if (action.type === 'decrementar') {
    return (state - 1)
  }

  if (action.type === 'set') {
    return action.payload
  }

  return state
})

console.log(store.getState())

store.dispatch({ type: 'hola' })
console.log(store.getState())

store.dispatch({ type: 'incrementar' })
console.log(store.getState())

store.dispatch({ type: 'decrementar' })
console.log(store.getState())


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
