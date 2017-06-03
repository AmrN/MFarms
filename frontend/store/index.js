import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas'
import rootReducer from '../reducers';

// import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {};

// export const actionTypes = {
//   ADD: 'ADD',
//   TICK: 'TICK'
// }

// REDUCERS
// export const reducer = (state = exampleInitialState, action) => {
//   return state;
// }

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

const sagaMiddleware = createSagaMiddleware()

export const initStore = (initialState = exampleInitialState) => {
  // return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga)
  // store.dispatch({
  //   type: 'LOAD_ONE[POST]',
  //   payload: {
  //     id: "591e9bfe718d931f1cb30a42"
  //   }
  // })
  // store.dispatch({
  //   type: 'LOAD_MANY[POST]',
  //   payload: {
  //     filters: {
  //       query: {
  //         $limit: 1,
  //         $skip: 1
  //       }
  //     }
  //   }
  // })
  return store;
}