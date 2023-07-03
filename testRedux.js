const { configureStore } = require('@reduxjs/toolkit');


//CREATE STATE
const initialState = {
  counter: 1
};


//CREATE REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...initialState,
        counter: initialState.counter + 1
      };
    case 'DEC_COUNTER':
      return {
        ...initialState,
        counter: initialState.counter - 1
      };
    default:
      break;
  }
  return state;
};

const store = configureStore({
  reducer
});

console.log(store.getState());


//ACTION to REDUCER
store.dispatch({type: 'INC_COUNTER'});
console.log(store.getState());

store.dispatch({type: 'DEC_COUNTER'});
console.log(store.getState());
