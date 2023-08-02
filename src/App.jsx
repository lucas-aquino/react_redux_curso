import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './components/TodoItem'

const initialState = {
  entities: [],
}

export const reducer = (state = initialState, action) => {

  if (action.type === 'todo/add') {
    return {
      ...state,
      entities: state.entities.concat({ ...action.payload }) 
    }
  }

  return state
}

function App() {

  const [ value, setValue ] = useState('')

  const dispatch = useDispatch()

  const state = useSelector(x => x)

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

  return (
    <div>
      <form>
        <input value={value} onChange={e => setValue(e.target.value)}/>
      </form>
      <button>mostrar todos</button>
      <button>completos</button>
      <button>incompletos</button>
      <ul>
        {
          state.entities.map(todo => 
          <TodoItem key={todo.id} todo={todo}>
            
          </TodoItem>)
        }
      </ul>
    </div>
  )
}

export default App
