import { setPending, setError, setFulfilled } from "./actionSetters"

export const fetchThunk = () => async dispatch => {
  dispatch(setPending())
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    const todos = data.slice(0, 10)
    dispatch(setFulfilled(todos))
  } catch (e) {
    dispatch(setError(e.message))
  }
}