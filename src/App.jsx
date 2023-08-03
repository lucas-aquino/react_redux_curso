import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './components/TodoItem'
import { setFilter } from './features/actionSetters'
import { fetchThunk } from './features/fetch'
import { statusSelector, todoSelector } from './features/selectors'

function App() {

  const [ value, setValue ] = useState('')

  const dispatch = useDispatch()

  const todos = useSelector(todoSelector)

  const status = useSelector(statusSelector)

  const submit = e => {
    e.preventDefault()
    
    if (!value.trim()) {
      return 
    }

    const id = Math.random().toString(36)

    const todo = {
      title: value,
      completed: false,
      id
    }

    dispatch({
      type: 'todo/add',
      payload: todo
    })

    setValue('')
  }

  if (status.loading === 'pending') {
    return (
      <div>cargando ...</div>
    )
  }

  if (status.loading === 'rejected') {
    return (
      <div>{ status.error }</div>
    )
  }


  return (
    <div>
      <form onSubmit={ submit }>
        <input value={ value } onChange={ e => setValue(e.target.value) }/>
      </form>
      <button onClick={() => dispatch(setFilter('all'))}>mostrar todos</button>
      <button onClick={() => dispatch(setFilter('complete'))}>completos</button>
      <button onClick={() => dispatch(setFilter('incomplete'))}>incompletos</button>
      <button onClick={() => dispatch(fetchThunk())}>fetchThunk</button>
      <ul>
        {
          todos.map(todo => 
          <TodoItem key={ todo.id } todo={ todo }></TodoItem>)
        }
      </ul>
    </div>
  )
}

export default App
