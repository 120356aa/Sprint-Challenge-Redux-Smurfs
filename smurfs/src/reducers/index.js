import {
    FETCH,
    SUCCESS,
    ERROR,
    ADD_SMURF,
    ADD_SUCCESS,
    ADD_ERROR
  } from '../actions';
  
  const initialState = {
    smurfs: [],
    error: null,
    fetching: false
  }
  
  const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_SMURF:
        return { ...state };
      case ADD_SUCCESS:
        return{
          ...state,
          error: null,
          smurfs: action.payload
        };
      case ADD_ERROR:
        return{ ...state, error: action.payload };
      case FETCH:
        return { ...state, fetching: true};
      case SUCCESS:
        return{
          ...state,
          error: null,
          smurfs: action.payload,
          fetching: false
        };
      case ERROR:
        return{ ...state, error: action.payload, fetching: false};
      default:
        return state;
    }
  }
  
  export default smurfReducer;
  