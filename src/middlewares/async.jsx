import { mac} from "../features/highOrderReducer"

export const asyncMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return next(action)
}

export const asyncMac = asyncTypes => ([
  mac(asyncTypes[0]),
  mac(asyncTypes[1], 'payload'),
  mac(asyncTypes[2], 'error'),
])
