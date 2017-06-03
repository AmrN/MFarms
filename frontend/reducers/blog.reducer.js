
function createServiceReducer(name) {
  const initialState = {
    one: {
      loading: null,
      data: null
    },
    many: {
      loading: null,
      data: null,
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case `LOAD_ONE[${name}]`:
      case `LOAD_MANY[${name}]`:
        return {
          ...state,
          loading: true,
        }
      case `LOAD_ONE_SUCCESS[${name}]`:
      case `LOAD_MANY_SUCCESS[${name}]`:
        return {
          ...state,
          loading: false,
          data: action.data,
        }
      case `LOAD_ONE_ERROR[${name}]`:
      case `LOAD_MANY_ERROR[${name}]`:
        return {
          ...state,
          loading: false,
        }
      default:
        return state;
    }
  }

  return function (state = initialState, action) {
    switch (action.type) {
      case `LOAD_ONE[${name}]`:
      case `LOAD_ONE_SUCCESS[${name}]`:
      case `LOAD_ONE_ERROR[${name}]`:
        return {
          ...state,
          one: reducer(state.one, action),
        }
      case `LOAD_MANY[${name}]`:
      case `LOAD_MANY_SUCCESS[${name}]`:
      case `LOAD_MANY_ERROR[${name}]`:
        return {
          ...state,
          many: reducer(state.many, action),
        }
      default:
        return state;
    };
  };
};


export default createServiceReducer('POST');