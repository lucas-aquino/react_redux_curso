import { combineReducers } from "redux"
import { makeFetchingReducer, makeSetReducer, reduceReducers, makeCrudReducer } from "./highOrderReducer"
import { asyncTodos } from "./actionSetters"

const actions = {
  filter: [
    'filter/set'
  ],
  todo: [
    'todo/add',
    'todo/complete'
  ],
  todos: [
    'todo/pending',
    'todo/fulfilled',
    'todo/rejected'
  ]
}

export const filterReducer = makeSetReducer(actions.filter)

export const fetchingReducer = makeFetchingReducer(asyncTodos)


const fulfilledReducer = makeSetReducer(['todo/fulfilled'])

const todoCrudReducer = makeCrudReducer(actions.todo)

export const todoReducer = reduceReducers(todoCrudReducer, fulfilledReducer)


export const reducer = combineReducers({
  todos: combineReducers({
    entities: todoReducer,
    status: fetchingReducer
  }),
  filter: filterReducer
})
