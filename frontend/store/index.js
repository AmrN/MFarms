import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  temp: 'hello world',
};

export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  return state;
}

// ACTIONS
// export const serverRenderClock = (isServer) => dispatch => {
//   return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
// }

// export const startClock = () => dispatch => {
//   return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
// }

// export const addCount = () => dispatch => {
//   return dispatch({ type: actionTypes.ADD })
// }

export const initStore = (initialState = exampleInitialState) => {
  // return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
  return createStore(reducer, initialState);
}