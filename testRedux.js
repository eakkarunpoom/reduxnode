const { configureStore } = require('@reduxjs/toolkit');

const initialState = {
  counter: 1
};

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
      return initialState;
  }
};

const store = configureStore({
  reducer: reducer
});

console.log(store.getState());