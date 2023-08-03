
export const reduceReducers = (...reducers) => (state, action) => reducers.reduce((acc, el) => el(acc, action), state)


const initialFetching = {
  loading: 'idle',
  error: null
}

export const makeFetchingReducer = actions => (state = initialFetching, action) => {
  if (action.type === actions[0]) {
    return {
      ...state,
      loading: 'pending'
    }
  }

  if (action.type === actions[1]) {
    return {
      ...state,
      loading: 'succeded'
    }
  }

  if (action.type === actions[2]) {
    return {
      error: action.error,
      loading: 'rejected'
    }
  }

  return state
}


export const makeSetReducer = actions => (state = 'all', action) => {
  if (action.type === actions[0]) {
    return action.payload
  }

  return state
}


export const makeCrudReducer = actions => (state = [], action) => {

  if (action.type === actions[0]) {
    return state.concat({ ...action.payload })
  }

  if (action.type === actions[1]) {
    const newEntities = state.map(entity => {
      if ( entity.id === action.payload.id ){
        return {
          ...entity,
          completed: !entity.completed
        }
      }
      return entity
    })
    return newEntities 
  }
  return state
}

//makeAsyncTypes
export const mat = (entity) => ([
  `${entity}/pending`,
  `${entity}/fulfilled`,
  `${entity}/rejected`,
])

//makeActionCreator
export const mac = (type, ...argsName) => (
  (...args) => {
    const action = { type }
    argsName.forEach((arg, index) => {
      action[argsName[index]] = args[index]
    })
    return action
  }
)


