import { mac, mat } from "./highOrderReducer"
import { asyncMac } from "../middlewares/async"

export const asyncTodos = mat('todo')

export const [setPending, setFulfilled, setError] = asyncMac(asyncTodos)

export const setComplete = mac('todo/complete', 'payload')

export const setFilter = mac('filter/set', 'payload')