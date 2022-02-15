import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Axios from 'axios';

const initialState = '';

const GET_GREETING = 'GET_GREETING'

const path = 'api/v1/greetings';

export const getGreetings = () => async(dispatch) => {
  const response = await Axios.get(path);
  let data = { greeting: response.data.greeting };
  dispatch({ type: GET_GREETING, payload: data });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
}

const configureStore = () =>{
  const store = createStore(reducer, applyMiddleware(thunk));
  return store;
}

export default configureStore;