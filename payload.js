const { configureStore } = require('@reduxjs/toolkit');
const initialState = {
  data:[
    {id: 1, name: 'Moss', score: 98},
    {id: 2, name: 'Pin', socre: 87}
  ]
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD":
      const newState = {
        ...state,
        data: [...state.data, action.payload]
      }
      return newState;
    case "DEL":
      const delState = {
        ...state,
        data: state.data.filter(student => student.id !== action.payload)
      }
      return delState;
    default:
      break;
  }
  return state;
}

const store = configureStore({reducer});
store.subscribe(()=>{
  console.log('State update', store.getState().data);
})
const data = {
  id:8,
  name: "TheO",
  score: 100
}

store.dispatch({type: "ADD", payload: data});
store.dispatch({type:"DEL", payload: 2});