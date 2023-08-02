import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//MALA PRACTICA
export const reducer = (state = 0, action) => {

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
}

function App() {
  const [ valor, setValor ] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const set = () => {
    dispatch({ type: 'set', payload: valor })
    setValor('')
  }
  return (
    <div>
      <p>Contador: { state }</p>
      <div>
        <input 
          type='text' 
          value={ valor } 
          onChange={ e => setValor(Number(e.target.value)) }/>
        <button onClick={ set }>💾</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: 'incrementar' })}>➕</button>
        <button onClick={() => dispatch({ type: 'decrementar' })}>➖</button>
      </div>
    </div>
  )
}

export default App
