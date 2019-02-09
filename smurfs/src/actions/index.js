import axios from 'axios';
 
export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const ADD_SMURFS = 'ADD_SMURFS'
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS'
export const ADD_SMURFS_FAILURE = 'ADD_SMURFS_FAILURE'

const url = `http://localhost:3333/smurfs`

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS });

    axios
      .get(url)
      .then(res => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: err })
      });
  };
}

export const addSmurfs = smurf => dispatch => {
  dispatch({ type: ADD_SMURFS });

  axios
    .post(url, smurf)
    .then(res => {
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ADD_SMURFS_FAILURE, payload: err})
    });
}
