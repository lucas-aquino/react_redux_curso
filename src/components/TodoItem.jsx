import { useDispatch } from "react-redux"
import { setComplete } from "../features/actionSetters"


const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  return(
    <li 
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => dispatch(setComplete(todo))}>
      { todo.title }
    </li>
  )
}

export default TodoItem